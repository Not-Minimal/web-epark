import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("accessToken") || null
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:3977/api/v1/user/me",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("User data:", response.data);

          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
          handleLogout();
        }
      }
    };

    fetchUser();
  }, [token]);

  const login = async (accessToken) => {
    setToken(accessToken);
    localStorage.setItem("accessToken", accessToken);
  };

  const refreshToken = async () => {
    try {
      const response = await axios.post("auth/refresh-token", {
        refreshToken: localStorage.getItem("refreshToken"),
      });

      const { accessToken } = response.data;
      setToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
    } catch (error) {
      console.error("Error refreshing token:", error);
      handleLogout();
    }
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: handleLogout,
    refreshToken,
    removeTokens: handleLogout, // Para eliminar ambos tokens
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
