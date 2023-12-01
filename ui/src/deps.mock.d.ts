/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import { MiddlewareHandler } from "hono";

declare global {
  class Deno {
    static env: {
      get: Function;
    };
  }
}
const mock = (..._args: unknown[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return {} as any;
};

export const {
  cors,
  serveStatic,
  load,
  getCookie,
  setCookie,
  decode,
} = {
  serveStatic: mock as (..._args: unknown[]) => MiddlewareHandler,
  cors: mock as (..._args: unknown[]) => MiddlewareHandler,
  load: mock,
  getCookie: mock,
  setCookie: mock,
  decode: mock,
};
export { type Context, Hono } from "hono";
export { HTTPException } from "hono/http-exception";
export { OAuth2Client } from "google-auth-library";
