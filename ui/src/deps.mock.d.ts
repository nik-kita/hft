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
  return {};
};

export const {
  cors,
  serveStatic,
  load,
} = {
  serveStatic: mock as (..._args: unknown[]) => MiddlewareHandler,
  cors: mock as (..._args: unknown[]) => MiddlewareHandler,
  load: mock,
};
export { type Context, Hono } from "hono";
