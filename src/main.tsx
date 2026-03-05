import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { DemoStoreProvider } from "./contexts/DemoStoreContext";
import { DemoModalProvider } from "./contexts/DemoModalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DemoStoreProvider>
          <DemoModalProvider>
            <App />
          </DemoModalProvider>
        </DemoStoreProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
