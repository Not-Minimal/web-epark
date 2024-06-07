import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation.jsx";
import CreateUser from "./components/CreateUser.jsx";
import CreateVehicle from "./components/CreateVehicle.jsx";
import Orders from "./components/Orders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<CreateUser />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/create/vehicle" element={<CreateVehicle />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
