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
} = {
  serveStatic: mock as (..._args: unknown[]) => MiddlewareHandler,
  cors: mock as (..._args: unknown[]) => MiddlewareHandler,
  load: mock,
  getCookie: mock,
  setCookie: mock,
};
export { type Context, Hono } from "hono";
export type { OAuth2Client } from 'google-auth-library'; 