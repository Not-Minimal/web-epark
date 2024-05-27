import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { WebRouter, AdminRouter } from "./router";
// import App from './App.jsx'
import "./index.css";
// import { Button } from "./components/ui/button.jsx";
// import { Header } from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminRouter />
      <WebRouter />
    </BrowserRouter>
  </React.StrictMode>
);
