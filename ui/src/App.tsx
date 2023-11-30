import "./App.css";
import GoogleBtn from "./components/GoogleBtn";
import { tw } from "./utils/tw";
import { HelmetProvider } from "react-helmet-async";

function App() {
  console.log(import.meta.env.MODE);
  return (
    <HelmetProvider>
      <div className={tw("h-screen w-screen bg-slate-600 text-white")}>
        <GoogleBtn
          GOOGLE_AUTH_CLIENT_ID={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
