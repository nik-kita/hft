import "./App.css";
import GoogleBtn from "./components/GoogleBtn";
import { tw } from "./utils/tw";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className={tw("h-screen w-screen bg-slate-600 text-white")}>
        <GoogleBtn />
      </div>
    </HelmetProvider>
  );
}

export default App;
