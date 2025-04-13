import { useState, useEffect } from "react";
import Button from "./Button";

const PrintCard = ({ city }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Precarga de imagen
  useEffect(() => {
    const img = new Image();
    img.src = city.photo;
    img.onload = () => setImageLoaded(true);
  }, [city.photo]);

  return (
    <div
      key={city._id}
      className="w-75 h-120 relative group overflow-hidden rounded-lg shadow-lg"
    >
      <div className={`
        w-full h-full transition-opacity duration-300
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <img
          src={city.photo}
          alt={city.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-200 
                    ease-in-out group-hover:scale-110 group-hover:grayscale"
        />

        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 
                    translate-y-full transition-all duration-700 ease-in-out
                    group-hover:opacity-100 group-hover:translate-y-0
                    flex flex-col justify-center items-center 
                    text-black p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
          <p className="mb-2">
            {city.country}, {city.continent}
          </p>
          <p className="mb-4 text-sm">{city.description}</p>

          <div className="space-y-1 text-sm">
            <p><strong>Currency:</strong> {city.currency.join(", ")}</p>
            <p><strong>Language:</strong> {city.language}</p>
            <p><strong>Time Zone:</strong> {city.timezone}</p>
          </div>

          <div className="mt-4">
            <Button 
              ruta="/details" 
              text="Details" 
              cityId={city._id} 
              state={{ cityData: city }} 
            />
          </div>
        </div>
      </div>

      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default PrintCard;