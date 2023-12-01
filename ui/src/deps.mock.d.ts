/* eslint-disable @typescript-eslint/no-explicit-any */
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
  return {} as any;
};

export const {
  cors,
  serveStatic,
  load,
  getCookie,
  setCookie,
  decode,
  verify,
} = {
  serveStatic: mock as (..._args: unknown[]) => MiddlewareHandler,
  cors: mock as (..._args: unknown[]) => MiddlewareHandler,
  load: mock,
  getCookie: mock,
  setCookie: mock,
  decode: mock,
  verify: mock,
};
export type VerifyOptions = any;
export { type Context, Hono } from "hono";
export { HTTPException } from "hono/http-exception";
export { OAuth2Client } from "google-auth-library";
