import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@ant-design/v5-patch-for-react-19";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ServiceProvider } from "./context/ServiceContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ServiceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServiceProvider>
  </AuthProvider>
);
