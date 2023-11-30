import { Hono, serveStatic } from "@deno";
import { api } from "./src/api.ts";

const root = /api/.test(Deno.cwd()) ? "../ui/dist" : "./ui/dist";
const app = new Hono();

app.route("/api", api);
app.use(
  "/*",
  serveStatic({
    root,
  }),
);
Deno.serve({
  port: 3000,
}, app.fetch);
