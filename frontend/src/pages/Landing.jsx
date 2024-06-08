import { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="flex items-center gap-2 p-8 lg:px-6 ">
          <a className="flex items-center gap-2" rel="ugc">
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
              <path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path>
              <path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path>
              <path d="m11 7-3 5h4l-3 5"></path>
              <line x1="22" x2="22" y1="11" y2="13"></line>
            </svg>
            <Link to="/" className="text-xl font-bold ">
              E-Park
            </Link>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              rel="ugc"
            ></a>
            <Link
              to="/login"
              className="inline-flex justify-center items-center py-3 px-4 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 "
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/signup"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Crear Cuenta
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section id="Hero2" className="bg-white dark:bg-black">
            <div className="flex flex-col justify-between px-8 mx-auto max-w-screen-xl text-center lg:py-16 lg:flex-row">
              <div className="mb-4 lg:mb-0 lg:pt-32 lg:max-w-lg lg:pr-5">
                <div>
                  <h1 className="lg:text-7xl first:mx-auto m-6 max-w-2xl font-display text-5xl font-medium tracking-tight text-slate-900 dark:text-white sm:text-7xl">
                    Gestiona tu Estacionamiento con
                    <span className="relative whitespace-nowrap text-green-400">
                      <span className="relative"> E-Park.</span>
                    </span>
                  </h1>
                  <p className="mx-auto m-12 mt-16 max-w-2xl text-xl tracking-tight text-slate-900 dark:text-slate-100">
                    Descubra el futuro del aparcamiento con e-park, nuestra
                    nueva aplicacion de estacioamiento en linea y seguro.
                  </p>
                </div>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/login"
                    className="inline-flex justify-center items-center py-3 px-4 text-base font-medium text-center text-white rounded-lg bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 shadow-2xl shadow-green-600/100"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/signup"
                    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                  >
                    Crear Cuenta
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="/src/assets/Dashboard.png"
                  className="object-cover object-top w-full h-64 mx-auto lg:h-auto xl:mr-24 md:max-w-sm"
                  alt=""
                ></img>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex  w-full  items-cente justify-center p-8 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 e-park. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    );
  }
}
