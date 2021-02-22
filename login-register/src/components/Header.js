import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;
  return (
    <nav className="flex justify-between items-center h-16 relative shadow-sm font-poppin text-indigo-700 sm:text-sm md:text-base lg:text-xl">
      <p to="/" className="pl-8">
        LOGO
      </p>
      {location == "/register" ? (
        <Link
          to="/login"
          className=" p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
        >
          <p>Login</p>
        </Link>
      ) : (
        <Link
          to="/register"
          className="p-4 hover:bg-indigo-400 hover:text-white transition duration-300 ease-in-out"
        >
          <p>Register</p>
        </Link>
      )}
    </nav>
  );
}
