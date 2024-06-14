import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await axios.post("auth/login", {
        email,
        password,
      });
      console.log("Usuario autenticado exitosamente:", response.data);

      const { accessToken } = response.data;
      login(accessToken);
      navigate("/dashboard");

      // // Almacenar los tokens en localStorage
      // localStorage.setItem("accessToken", response.data.accessToken);
      // localStorage.setItem("refreshToken", response.data.refreshToken);

      // Redirigir a una página protegida
    } catch (error) {
      console.error("Error al autenticar al usuario:", error);
      alert("Solicita tu acceso a epark@gmail.com");
      setError("Error al autenticar al usuario");
    }
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex items-center justify-center  gap-2 p-8 lg:px-6">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M9 9a3 3 0 1 1 6 0"></path>
            <path d="M12 12v3"></path>
            <path d="M11 15h2"></path>
            <path d="M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"></path>
            <path d="M12 19v3"></path>
          </svg>
          <Link to="/" className="text-xl font-bold">
            E-Park
          </Link>
        </div>
      </header>

      <main className="flex-grow ">
        <div className="flex min-h-full items-center justify-center p-8">
          <div className="max-w-md w-full space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold">Iniciar Sesión</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Inicia sesión para comenzar a usar la aplicación E-Park.
              </p>
            </div>
            <form className="space-y-4" onSubmit={loginUser}>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500 dark:text-gray-400"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  id="email"
                  placeholder="Ingresa tu email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="on"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500 dark:text-gray-400"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Iniciar Sesión
              </button>
              {error && <p className="text-red-500">{error}</p>}
            </form>
            <div className="flex items-center justify-between">
              <span>¿Tienes una cuenta?</span>
              <Link to="/signup" className="underline">
                Crear Cuenta
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center justify-center p-8 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 E-Park. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
