import './App.css'
import HeroSection from './pages/HeroSection'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Cities from './pages/Cities'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import HeroLayout from './layouts/HeroLayout'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setUser } from './redux/actions/authAction'
import axios from 'axios'
import { useEffect } from 'react'
import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute'



const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroLayout />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/login",
        element: <AuthRoute><Login /></AuthRoute>,
      },
      {
        path: "/signup",
        element: <AuthRoute><SignUp /></AuthRoute>,
      },
      {
        path: "/details",
        element: <PrivateRoute><Details/> </PrivateRoute>,
      },
    ],
  },
]);

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/users/validateToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data.success) {
      return response.data.response; // Cambiado de .user a .response para coincidir con el backend
    }
    throw new Error('Token validation failed');
  } catch (error) {
    console.error("Error validating token:", error);
    localStorage.removeItem("token");
    return null;
  }
};

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      loginWithToken(token).then((userData) => {
        if (userData) {
          const authTemp = {
            user: userData, // Ahora userData contendrá email, id, name, photo y country
            token: token
          };
          dispatch(setUser(authTemp));
        }
      });
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
