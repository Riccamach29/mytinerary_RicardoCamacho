import { useEffect, useState } from "react";

const Fetch = ({ apiUrl, onDataFetched }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.response)) {
          setCities(data.response);
          onDataFetched(data.response); // Pasamos los datos a Cities.jsx
        } else {
          setCities([]);
          onDataFetched([]); // Pasamos un array vacío si no hay datos
        }
      })
      .catch((error) => console.error("Error fetching cities:", error));
  }, [apiUrl, onDataFetched]);

  return null; // No renderiza nada, solo obtiene los datos
};

export default Fetch;
