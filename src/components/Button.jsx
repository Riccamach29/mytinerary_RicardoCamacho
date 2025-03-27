import { useNavigate } from "react-router-dom";

export default function Button({ 
  ruta, 
  text, 
  cityId = null, 
  state = null 
}) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        if (cityId) {
            // Navegar a la ruta de detalles con el ID como parámetro de búsqueda
            navigate(`${ruta}?cityId=${cityId}`, { state });
        } else {
            // Navegación estándar si no se proporciona cityId
            navigate(ruta);
        }
    };

    return (
        <button
            onClick={handleNavigation}
            className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
        >
            {text}
        </button>
    );
}