import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "../components/Carrusel";

export default function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = "http://localhost:8080/api/cities/allCities";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(API_URL);
        const imageUrls = response.data.response.map(city => city.photo);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []); // Solo se ejecuta una vez al montar el componente

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[90vh] bg-[#e2e8f0] text-gray-900 flex flex-row gap-4 justify-center items-center">
      <div className="h-[75vh] w-[80%] mt-22 rounded flex justify-center items-center 
                    bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 
                    shadow-lg backdrop-blur-md bg-opacity-80 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full 
                      bg-[url('https://www.transparenttextures.com/patterns/fresh-snow.png')] 
                      opacity-80" />

        <div className="w-[90%] z-10">
          <Carousel images={images} />
          
        </div>
      </div>
    </div>
  );
}