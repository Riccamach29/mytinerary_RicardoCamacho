const PrintCard = ({ city }) => {
    return (
      <div key={city.name} className="w-80 bg-blue-300 rounded-lg shadow-lg overflow-hidden">
        {/* Imagen de la ciudad */}
        <img src={city.photo} alt={city.name} className="w-full h-48 object-cover" />
  
        <div className="p-4">
          <h2 className="text-2xl font-bold text-red-900">{city.name}</h2>
          <p className="text-sm text-gray-700">
            {city.country}, {city.continent}
          </p>
          <p className="mt-2 text-gray-600">{city.description}</p>
  
          {/* Información adicional */}
          <p className="mt-2 text-sm"><strong>Currency:</strong> {city.currency.join(", ")}</p>
          <p className="text-sm"><strong>Language:</strong> {city.language}</p>
          <p className="text-sm"><strong>Time Zone:</strong> {city.timezone}</p>
  
          {/* Landmarks */}
          <h3 className="mt-4 text-lg font-semibold text-red-900">Landmarks</h3>
          <div className="mt-2 space-y-2">
            {city.landmarks.map((landmark, index) => (
              <div key={index} className="flex items-center gap-2 bg-blue-500 p-2 rounded">
                <img src={landmark.photo} alt={landmark.name} className="w-12 h-12 rounded object-cover" />
                <div>
                  <p className="text-sm font-medium">{landmark.name}</p>
                  <p className="text-xs text-gray-600">{landmark.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PrintCard;
  