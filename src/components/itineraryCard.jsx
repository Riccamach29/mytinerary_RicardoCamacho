import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { updateLikes } from "../redux/actions/itineraryAction";

export default function ItineraryCard({ itinerary }) {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(updateLikes(itinerary));
  };

  return (
    <div className="w-[300px] lg:w-[350px] bg-white rounded-xl shadow-md overflow-hidden border">
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={itinerary.userPhoto}
          alt={`${itinerary.user} avatar`}
        />
        <div className="ml-3">
          <p className="text-sm font-semibold">{itinerary.user}</p>
          <p className="text-xs text-gray-500">{itinerary.city.name}</p>
        </div>
      </div>

      {/* Imagen principal */}
      <img
        className="w-full h-48 object-cover"
        src={itinerary.photo}
        alt={itinerary.name}
      />

      {/* Contenido principal */}
      <div className="p-4 text-sm text-gray-700 space-y-2">
        <div className="flex justify-between relative">
        <button
            onClick={handleLike}
            className={`
                text-xl transition-all duration-300
                hover:text-red-500 hover:scale-125
                ${itinerary.likes > 0 ? 'text-red-500 scale-125' : 'text-gray-400'}
            `}
            >
            <FaHeart />
        </button>
          {itinerary.likes > 0 && (
            <span className="absolute -top-2 -left-2 text-sm text-gray-500 bg-white px-1 rounded-full shadow-sm">
              {itinerary.likes}
            </span>
          )}
        </div>
        <h2 className="font-semibold text-base">{itinerary.name}</h2>
        <p>Duración: {itinerary.duration} horas</p>
        <p>Precio: {"💵".repeat(itinerary.price)}</p>
        <div className="flex flex-wrap gap-1 text-xs text-blue-500">
          {itinerary.hashtags?.map((tag, i) => (
            <span key={i} className="bg-blue-100 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Botones */}
      <div className="flex items-center justify-between px-4 pb-4 pt-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="mx-auto text-gray-600 text-lg transition-transform"
        >
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>

      {/* Colapsable */}
      {expanded && (
        <div className="px-4 pb-4 text-sm text-gray-600 border-t">
          <h2 className="text-2xl font-bold text-yellow-700">
            🚧 Under Construction 🚧
          </h2>
          <p className="text-yellow-800 mt-2">
            More details about this itinerary are coming soon!
          </p>
        </div>
      )}
    </div>
  );
}
