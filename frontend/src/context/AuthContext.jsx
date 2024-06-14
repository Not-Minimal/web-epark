import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

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
          setUser(response.data); // Asumiendo que la respuesta contiene todos los datos del usuario
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUser();
  }, [token]);

  const login = async (accessToken) => {
    setToken(accessToken);
    console.log("Token de acceso:", accessToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    console.log("Usuario desconectado exitosamente");
    // Limpiar el token del almacenamiento local o de sesión si es necesario
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
