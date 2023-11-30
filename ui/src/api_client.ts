import { hc } from "hono/client";
import type { api } from "../../api/src/api";

// TODO
const base_endpoint = import.meta.env.PROD
  ? "https://hft.deno.dev/api"
  : "http://localhost:3000/api";

export const api_client = hc<typeof api>(base_endpoint);
