import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/outline"; 
import logo from "../assets/logo1.png";

const routes = [
  { path: "/home", name: "Home" },
  { path: "/cities", name: "Cities" },
  { path: "/login", name: "Login", icon: <UserIcon className="h-5 w-5 inline-block" /> }, 
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0f172a]/60 p-2 shadow-lg fixed top-0 left-0 max-h-[14vh] w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold">
          <img src={logo} alt="Logo" className="h-18 w-auto pl-4" />
        </NavLink>

        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-8">
            {routes.map((route) => (
              <li className="text-white hover:text-yellow-400" key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : ""
                  }
                >
                  {route.icon && route.icon} {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0f172a]/60 shadow-lg py-2 rounded-lg">
          <ul className="flex flex-col gap-2 z-10">
            {routes.map((route) => (
              <li className="text-white hover:text-yellow-400" key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : ""
                  }
                >
                  {route.icon && route.icon} {route.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
