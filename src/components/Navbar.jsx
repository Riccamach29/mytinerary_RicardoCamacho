import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from 'react-redux';
import logo from "../assets/logo1.png";
import { logout } from "../redux/actions/authAction";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log('Iniciando logout...'); // Debug
      const result = await dispatch(logout()).unwrap();
      console.log('Logout successful:', result); // Debug
      navigate('/login');
    } catch (error) {
      console.error('Error en logout:', error);
    }
  };

  const UserInfo = () => (
    <div className="flex flex-col items-center mx-4">
      <img 
        src={user?.photo} 
        alt={user?.name}
        className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
      />
      <span className="text-white text-sm hidden md:block">
        {user?.name}
      </span>
    </div>
  );

  const routes = [
    { path: "/home", name: "Home" },
    { path: "/cities", name: "Cities" },
    ...(!token ? [
      { path: "/login", name: "Sign In", icon: <UserIcon className="h-5 w-5 inline-block" /> }
    ] : [
      { 
        path: "#",
        name: "Sign Out",
        icon: <ArrowRightOnRectangleIcon className="h-5 w-5 inline-block" />,
        onClick: handleLogout
      }
    ])
  ];

  return (
    <nav className="bg-[#0f172a]/60 p-2 shadow-lg fixed top-0 left-0 max-h-[14vh] w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-white text-xl font-bold">
          <img src={logo} alt="Logo" className="h-18 w-auto pl-4" />
        </NavLink>

        {/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-6">
  <ul className="flex items-center gap-8"> {/* Agregado items-center aquí */}
    {routes.map((route) => (
      <li className="text-white hover:text-yellow-400" key={route.path}>
        {route.onClick ? (
          <div className="flex items-center">
            <button 
              onClick={route.onClick}
              className="flex items-center hover:text-yellow-400 transition-colors duration-300"
              >
              {route.icon} <span className="ml-1">{route.name}</span>
            </button>
              {token && <UserInfo />}
          </div>
        ) : (
          <NavLink
            to={route.path}
            className={({ isActive }) =>
              `flex items-center ${isActive ? "text-yellow-500" : ""} hover:text-yellow-400 transition-colors duration-300`
            }
          >
            {route.icon} <span className="ml-1">{route.name}</span>
          </NavLink>
        )}
      </li>
    ))}
  </ul>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#0f172a]/95 shadow-lg py-4 rounded-lg mt-2">
          {token && <UserInfo />} {/* Agregamos el UserInfo en el menú móvil */}
          <ul className="flex flex-col gap-4">
            {routes.map((route) => (
              <li className="text-white hover:text-yellow-400" key={route.path}>
                {route.onClick ? (
                  <button 
                    onClick={route.onClick}
                    className="flex items-center justify-center w-full hover:text-yellow-400 transition-colors duration-300"
                  >
                    {route.icon} <span className="ml-1">{route.name}</span>
                  </button>
                ) : (
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `flex items-center justify-center ${isActive ? "text-yellow-500" : ""} hover:text-yellow-400 transition-colors duration-300`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {route.icon} <span className="ml-1">{route.name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}