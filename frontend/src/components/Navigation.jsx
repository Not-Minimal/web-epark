import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <header className="flex h-16 w-full items-center justify-between bg-gray-900 px-4 md:px-6">
        <a
          className="flex items-center gap-2 text-lg font-semibold text-white"
          href="#"
        >
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
          <span className="sr-only">Parking Dashboard</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-gray-400 md:flex">
          <Link
            to="/dashboard"
            className="inline-flex h-8 items-center justify-center rounded-md px-4 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none"
          >
            Dashboard
          </Link>
          <Link
            to="/vehicles"
            className="inline-flex h-8 items-center justify-center rounded-md px-4 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none"
          >
            Vehiculos
          </Link>
          <Link
            to="/parking-lots"
            className="inline-flex h-8 items-center justify-center rounded-md px-4 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none"
          >
            Bloques
          </Link>
          <Link
            to="/settings"
            className="inline-flex h-8 items-center justify-center rounded-md px-4 transition-colors hover:bg-gray-800 hover:text-gray-50 focus:bg-gray-800 focus:text-gray-50 focus:outline-none"
          >
            Ajustes
          </Link>
        </nav>
      </header>
    );
  }
}
