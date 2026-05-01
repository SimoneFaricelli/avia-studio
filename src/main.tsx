import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// 🔥 FIX GITHUB PAGES ROUTING
const redirect = new URLSearchParams(window.location.search).get("redirect");

if (redirect) {
  window.history.replaceState(null, "", redirect);
}

createRoot(document.getElementById("root")!).render(<App />);