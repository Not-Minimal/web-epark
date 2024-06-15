// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation.jsx";
import CreateUser from "./components/CreateUser.jsx";
import CreateVehicle from "./components/CreateVehicle.jsx";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings.jsx";
import Orders from "./components/Orders.jsx";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import axios from "axios";
import WithAuthRedirect from "./components/WithAuthRedirect";
import PrivateRoute from "./components/PrivateRoute";
axios.defaults.baseURL = "http://localhost:3977/api/v1";

// Layout component to wrap routes with Navigation
const Layout = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <WithAuthRedirect>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <Layout>
                  <Routes>
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/create" element={<CreateUser />} />
                    <Route path="/create/vehicle" element={<CreateVehicle />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </WithAuthRedirect>
    </Router>
  </React.StrictMode>
);
