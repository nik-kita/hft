import { createMachine } from "xstate";

export const auth_machine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEMCuAXAFgfQLbIGNMBLAOzADoBxVOdCgMWICdZ0BaZABy7GWbCkCYAMQBtAAwBdRKC4B7WMXTF5pWSAAeidgEYJAJgAcFXQE4ALAFYLR3QGYzRswDZdAGhABPHRZcWKC10LCXt-WxszewBfaM80LDxCEnJqWjYKAAVmeWFYWE4MTEEVAmQVNQoAeiqAAgAVAHkAEUaRAFEANxLa3UkZJBAFJQr1Qe0EdjNQ00srXXMDKwB2MzNPHwQDMwoJfyswoyM9g2WXY1j4oqSiMkoAVVgwZg7u0nRe-o1h5VUx0AmUxm5msCzMS1W628iAMBgkFGcyyMyz2ElRQUuIASOHwt1SNDojBYbE4PD4AiEojEugGckUvzUGkBFgs9go9iR9nsEnB3IkVisG18Vhcu3OwQsy2W9mCSxcmOxNxSlAJGSo8nkUAANmB2AAjDDoNQiAha4gEADWX0GP1GTJ0Lg5uwkQQkunOSOlFiFk10ywC+gMujsjjMwYWRlicRApHkEDgGkVuOV33pdvGOgWBgDc1sDicrg80MmRisOyOXNZ3L8jsj0aTyTuaToqZGf3tvokZ1m1jzjmcbh97ClBnZRi5-bMq3mFgV12TTdV9CYrA43F4-EEwlbDP+WkzaICHqOVlhLjMAu9xfY-nh9nH9jhwezRgM8vr88b+PS9GyuTgBTYiU5rlO2NppmBAI6JYOwgvMwYuC6VgSEYQ5vgGhi6PM55Tm675XIkC7foSf55IBRTAWUozVHUTStDu6ZQZM0y6D28FGIh1goUODijoGDgWG+nLhnOhFfg8TzMAxkH7sxbpsRGnHIahxa6G+7JThxr64a+s4fmJeKUAAwlqZolNJjIZnJrFwYpSHccW9iShQIrWI4LKXsGok4uJzZqhq2q6ga6BGnutoycySwIjKoKynsLiCtefoYUGIZrOGXlRkAA */
  id: "auth_machine",
  initial: "Guest",
  states: {
    Guest: {
      description: "_Someone enter the site._",
      initial: "First-appearence",

      states: {
        "First-appearence": {
          description:
            "_The __`first`__ means that we are not already try to authenticate `guest` or etc._",
          always: [{
            target: "Process-authentication",
            description:
              "_Automatically check does `guest` is already has __`auth`__ header_",
            cond: "header_exists",
          }, "Google-button"],
        },

        "Process-authentication": {
          description: "_Make API call to login_.",

          states: {
            "// TODO": {
              on: {
                "Event 1": "#auth_machine.User",
              },
            },
          },

          initial: "// TODO",
        },
        "Google-button": {
          description: "_Show `google-button` for authentication_.",
          on: {
            click: "Process-authentication",
          },
        },
      },
    },

    User: {
      on: {
        "Event 1": "Cllient",
      },
    },

    Cllient: {},
  },
}, {
  guards: {},
});
