import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import "./index.css";

// نغلّف التطبيق كله بـ SettingsProvider ليصل أي مكوّن إلى
// (الوضع الداكن، اللغة، اللون، الخط) عبر useSettings().
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>
);
