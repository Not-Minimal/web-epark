// src/components/PublicRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();

  if (isAuthenticated()) {
    // Llamar a logout para cerrar sesión si el usuario está autenticado
    logout();
    return <Navigate to="/login" />;
  }

  return children;
};

export default PublicRoute;
