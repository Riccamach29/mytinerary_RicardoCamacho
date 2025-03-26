import { useNavigate } from "react-router-dom";

export default function Button({ ruta, text }) {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(ruta)}
            className=" px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
        >
            {text}
        </button>
    );
}
