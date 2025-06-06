import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Set default language if not set
if (!localStorage.getItem('language')) {
  localStorage.setItem('language', 'sr');
}

createRoot(document.getElementById("root")!).render(<App />);
