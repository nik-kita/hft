import { Helmet } from "react-helmet-async";
import { api_client } from "../api_client";
import { ForwardedRef, forwardRef } from "react";

type Props = {
  // none
};

const GoogleBtn = forwardRef((_: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref}>
      <Helmet>
        <script src="https://accounts.google.com/gsi/client" async></script>
      </Helmet>
      <div>
        <div
          id="g_id_onload"
          data-client_id={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
          data-context="use"
          data-ux_mode="popup"
          data-login_uri={api_client.authentication["g-btn"].$url().href}
          data-auto_prompt="false"
        >
        </div>
        <div
          className="g_id_signin"
          data-type="standard"
          data-shape="pill"
          data-theme="filled_black"
          data-text="continue_with"
          data-size="large"
          data-locale="en-US"
          data-logo_alignment="left"
        >
        </div>
      </div>
    </div>
  );
});

export default GoogleBtn;
