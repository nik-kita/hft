// TODO check 'google-auth-library' & Deno updates
import {
  Context,
  cors,
  decode,
  getCookie,
  Hono,
  // OAuth2Client,
  HTTPException,
} from "@deno";

const node_env = Deno.env.get("NODE_ENV");
const is_dev = node_env && node_env !== "production";
const _api = new Hono();
if (is_dev) {
  _api.use("/*", cors({ origin: "http://localhost:5173" }));
}
// const audience = Deno.env.get("GOOGLE_AUTH_CLIENT_ID") ||
// "GOOGLE_AUTH_CLIENT_ID-env-is-expected";
// const google_client = new OAuth2Client();
// const gKey = new TextEncoder().encode(audience);

export const api = _api
  .get("/welcome", (c: Context) => {
    return c.text("Hello from API!");
  })
  .post("/authentication/google", async (c: Context) => {
    const { credential, g_csrf_token } = await c.req.parseBody<{
      credential: string;
      g_csrf_token: string;
    }>();
    if (!g_csrf_token) {
      throw new HTTPException(400, { message: "No CSRF token in post body." });
    }
    const cookie_g_csrf_token = getCookie(c).g_csrf_token;
    if (!cookie_g_csrf_token) {
      throw new HTTPException(400, { message: "No CSRF token in Cookie." });
    }
    if (cookie_g_csrf_token !== g_csrf_token) {
      throw new HTTPException(400, {
        message: "Failed to verify double submit cookie.",
      });
    }
    const [
      header,
      payload,
      signature,
    ] = decode(credential);

    return c.json({
      header,
      payload,
      signature,
      is_verified: false, // TODO
    });
  });
