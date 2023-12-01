import { Context, cors, getCookie, Hono, OAuth2Client } from "@deno";

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
    const data = await c.req.parseBody<{
      credential: string,
      g_csrf_token: string,
    }>();
    console.log(data);
    console.log(getCookie(c));
    console.log(audience);
    const ticket = await google_client.verifyIdToken({
      idToken: data.g_csrf_token,
      audience,
    });
    console.log(ticket);
    const payload = ticket.getPayload();

    console.log(payload);

    return c.json(payload);
  });
