import { useState, useEffect } from "react";

const CityDetailsHero = ({ city }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = city.photo;
    img.onload = () => setImageLoaded(true);
  }, [city.photo]);

  return (
    <div className="relative h-[85vh] w-full">
      {/* Imagen de fondo */}
      <div className={`
        absolute inset-0 transition-opacity duration-1000
        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <img
          src={city.photo}
          alt={city.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 flex">
        {/* Columna izquierda - Título y ubicación */}
        <div className="w-1/2 p-8 flex flex-col justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            {city.name}
          </h1>
          <p className="text-xl mb-2 animate-slide-up">
            {city.country}, {city.continent}
          </p>
        </div>

        {/* Columna derecha - Información */}
        <div className="w-1/2 p-8 flex items-center">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 w-full">
            <div className="space-y-4 text-white">
              <p className="text-lg leading-relaxed animate-fade-in">
                {city.description}
              </p>
              
              <div className="border-t border-white/20 pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="animate-slide-up" style={{animationDelay: '0.5s'}}>
                    <h3 className="font-semibold mb-1">Currency</h3>
                    <p>{city.currency.join(", ")}</p>
                  </div>
                  
                  <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
                    <h3 className="font-semibold mb-1">Language</h3>
                    <p>{city.language}</p>
                  </div>
                  
                  <div className="animate-slide-up" style={{animationDelay: '1.1s'}}>
                    <h3 className="font-semibold mb-1">Time Zone</h3>
                    <p>{city.timezone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading spinner */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default CityDetailsHero;