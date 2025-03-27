const PrintCard = ({ city }) => {
  return (
    <div
      key={city.name}
      className="w-75 h-120 relative group overflow-hidden rounded-lg shadow-lg"
    >
      {/* Imagen de la ciudad */}
      <img
        src={city.photo}
        alt={city.name}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-200 
                      ease-in-out group-hover:scale-110 group-hover:grayscale group-hover:duration-500"
      />

      {/* Contenedor de información que aparece en hover */}
      <div
        className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 
                      translate-y-full transition-all duration-700 ease-in-out group-hover:delay-200
                      group-hover:opacity-100 group-hover:translate-y-0
                      flex flex-col justify-center items-center 
                      text-black p-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
        <p className="mb-2">
          {city.country}, {city.continent}
        </p>
        <p className="mb-4 text-sm">{city.description}</p>

        {/* Información adicional */}
        <div className="space-y-1 text-sm">
          <p>
            <strong>Currency:</strong> {city.currency.join(", ")}
          </p>
          <p>
            <strong>Language:</strong> {city.language}
          </p>
          <p>
            <strong>Time Zone:</strong> {city.timezone}
          </p>
        </div>

        {/* Landmarks */}
        <div className="mt-4 w-full">
          <h3 className="text-lg font-semibold mb-2">Landmarks</h3>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {city.landmarks.map((landmark, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/20 p-2 rounded"
              >
                <img
                  src={landmark.photo}
                  alt={landmark.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium">{landmark.name}</p>
                  <p className="text-xs">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintCard;
