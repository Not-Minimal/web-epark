// src/context/AuthContext.jsx
import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
      fetchUser(storedAccessToken);
    }
  }, []);

  const fetchUser = async (token) => {
    try {
      const response = await axios.get("http://localhost:3977/api/v1/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      console.log("User data:", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const login = async (accessToken, refreshToken) => {
    setAccessToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    fetchUser(accessToken);
  };

  const logout = (navigate) => {
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    if (navigate) navigate("/login"); // Navegar a login si se proporciona navigate
  };

  const refreshToken = async () => {
    try {
      const storedRefreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("auth/refresh-token", {
        refreshToken: storedRefreshToken,
      });
      const { newAccessToken } = response.data;
      setAccessToken(newAccessToken);
      localStorage.setItem("accessToken", newAccessToken);
    } catch (error) {
      console.error("Error refreshing token:", error);
      logout(); // Logout del usuario si falla la renovación del token
    }
  };

  const isAuthenticated = () => !!accessToken;

  const data = {
    accessToken,
    user,
    login,
    logout,
    refreshToken,
    isAuthenticated,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
