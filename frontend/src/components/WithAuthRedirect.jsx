import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const WithAuthRedirect = ({ children }) => {
  const navigate = useNavigate();

  const handleRedirect = (accessToken) => {
    if (!accessToken) {
      navigate("/login");
    }
  };

  return (
    <AuthProvider>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { handleRedirect })
      )}
    </AuthProvider>
  );
};

export default WithAuthRedirect;
