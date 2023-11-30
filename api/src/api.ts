import { Context, cors, getCookie, Hono } from "@deno";
import { OAuth2Client } from "google-auth-library";

const node_env = Deno.env.get("NODE_ENV");
const is_dev = node_env && node_env !== "production";
const _api = new Hono();
if (is_dev) {
  _api.use("/*", cors({ origin: "http://localhost:5173" }));
}
const audience = Deno.env.get("GOOGLE_AUTH_CLIENT_ID") ||
  "GOOGLE_AUTH_CLIENT_ID-env-is-expected";
const google_client = new OAuth2Client();

export const api = _api
  .get("/welcome", (c: Context) => {
    return c.text("Hello from API!");
  })
  .post("/authentication/google", async (c: Context) => {
    const idToken = getCookie(c).g_csrf_token;
    const ticket = await google_client.verifyIdToken({
      idToken,
      audience,
    });
    const payload = ticket.getPayload();

    console.log(payload);

    return c.jsonT(payload);
  });
