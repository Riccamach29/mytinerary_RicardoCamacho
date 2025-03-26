import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import Button from "./Button";
import Home from "./Home";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="w-full text-center px-5 absolute z-10"
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: Math.max(1 - scrollY / 300, 0),
          scale: Math.max(1 - scrollY / 1000, 0.9),
        }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <h1 className="text-6xl font-bold text-yellow-600 pt-50 lg:pt-30 drop-shadow-[0_0_4px_rgba(75,85,99,0.8)]">
          My Tinerary
        </h1>
        <div className="mt-4 py-6">
          <p className="text-gray-100 mt-4 text-2xl font-semibold w-4/5 md:w-1/2 mx-auto drop-shadow-[0_0_4px_rgba(75,85,99,0.8)]">
            Find your perfect trip,
          </p>
          <p className="text-gray-100 mt-4 text-2xl font-semibold w-4/5 md:w-1/2 mx-auto drop-shadow-[0_0_4px_rgba(75,85,99,0.8)]">
            designed by insiders who know and love their cities!
          </p>
        </div>
        <div className="animate-bounce">
          <Button ruta="/cities" text="Join Now" />
        </div>
      </motion.div>

      <div className="h-screen w-full overflow-hidden relative">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/27906314/pexels-photo-27906314/free-photo-of-resfriado-frio-glaciar-iceberg.jpeg')] bg-cover bg-center animate-zoomIn">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-100"></div>
        </div>
      </div>

      <motion.div
        id="home"
        className="bg-gray-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: scrollY > 200 ? 1 : 0, y: scrollY > 200 ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <Home />
      </motion.div>
    </>
  );
}
