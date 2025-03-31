import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { SocketProvider } from "./context/SocketContext"; 
import "./styles/Auth.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SocketProvider> {/* Provides WebSocket to all components */}
      <App />
    </SocketProvider>
  </BrowserRouter>
);
