import './App.css'
import HeroSection from './pages/HeroSection'
import Home from './pages/Home'
import Login from './pages/Login'
import Cities from './pages/Cities'
import Details from './pages/Details'
import NotFound from './pages/NotFound'
import HeroLayout from './layouts/HeroLayout'
import MainLayout from './layouts/MainLayout'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        element: <Login />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
