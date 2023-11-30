import { Hono, load, serveStatic } from "@deno";
import { api } from "./src/api.ts";

await load({ export: true });

const app = new Hono();

app.route("/api", api);

const root = /api/.test(Deno.cwd()) ? "../ui/dist" : "./ui/dist";
app.use(
  "/*",
  serveStatic({
    root,
  }),
);

Deno.serve({
  port: 3000,
}, app.fetch);
