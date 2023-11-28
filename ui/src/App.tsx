import { useState } from "react";
import "./App.css";
import { api_client } from "./api_client";
import { tw } from "./utils/tw";

function App() {
  const [api_res, set_api_res] = useState("");
  const [toggle_api_call, set_toggle_api_call] = useState(true);

  return (
    <div className={tw("h-screen w-screen bg-slate-600 text-white")}>
      <button
        className={tw("border-1 px-2 hover:bg-green-600 bg-green-700")}
        onClick={async () => {
          let text = "";
          if (toggle_api_call) {
            const res = await api_client.welcome.$get();
            text = await res.text();
          }
          set_api_res(() => text);
          set_toggle_api_call((prev) => !prev);
        }}
      >
        check API
      </button>
      {api_res && <h1>{api_res}</h1>}
    </div>
  );
}

export default App;
