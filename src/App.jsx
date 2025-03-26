import './App.css'
import HeroSection from './components/HeroSection'
import Home from './components/Home'
import Login from './components/Login'
import Cities from './components/Cities'
import NotFound from './components/NotFound'
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
