import { Context, cors, Hono, load, getCookie } from "@deno";

await load({ export: true });
const node_env = Deno.env.get("NODE_ENV");
const is_dev = node_env && node_env !== "production";
const _api = new Hono();
if (is_dev) {
  _api.use("/*", cors({ origin: "http://localhost:5173" }));
}

export const api = _api
  .get("/welcome", (c: Context) => {
    return c.text("Hello from API!");
  })
  .post("/authentication/google", (c: Context) => {
    console.log(getCookie(c));
    return c.text("ok");
  });
