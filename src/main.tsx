import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import logo from "@/assets/logo.png";

const setFavicon = () => {
  let icon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
  if (!icon) {
    icon = document.createElement("link");
    icon.rel = "icon";
    document.head.appendChild(icon);
  }
  icon.type = "image/png";
  icon.href = logo;
};

setFavicon();

createRoot(document.getElementById("root")!).render(<App />);
