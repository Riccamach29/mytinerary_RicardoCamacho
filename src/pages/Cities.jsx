import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PrintCard from "../components/PrintCard";
import { changeSearch } from "../redux/actions/filterActions";
import { getAllData } from "../components/axios";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.filter.searchTerm);
  const API_URL = "http://localhost:8080/api/cities/allCities";

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const citiesData = await getAllData(API_URL, true);
        setCities(citiesData);
        console.log(citiesData);
        
      } catch (error) {
        console.error("Error in Cities component:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[90vh] bg-[#e2e8f0] text-amber-100 flex flex-col items-center pt-24">
      <input
        type="text"
        placeholder="Search City..."
        value={searchTerm}
        className="w-75 p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        onChange={(e) => dispatch(changeSearch(e.target.value))}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 justify-center w-full max-w-7xl">
        {filteredCities.map((city) => (
          <PrintCard key={city._id} city={city} />
        ))}
      </div>
    </div>
  );
}