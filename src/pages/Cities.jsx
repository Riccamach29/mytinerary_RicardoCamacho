import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrintCard from "../components/PrintCard";
import { fetchCities } from "../redux/actions/citiesAction";
import { statusTypes } from "../redux/reducers/citiesReducer";

export default function Cities() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.filter.searchTerm);
  const { cities, status, error } = useSelector(state => state.cities);
  const isLoading = status === statusTypes.PENDING;
  const API_URL = "http://localhost:8080/api/cities/allCities";

  useEffect(() => {
    dispatch(fetchCities(API_URL));
  }, [dispatch]);

  const filteredCities = cities.filter(city => 
    city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[90vh] bg-[#e2e8f0] text-amber-100 flex flex-col items-center p-6 pt-22">
      <input
        type="text"
        placeholder="Search City..."
        value={searchTerm}
        className="w-75 p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        onChange={(e) => dispatch(changeSearch(e.target.value))}
      />

      {isLoading ? (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"/>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {filteredCities.map((city) => (
            <PrintCard key={city._id} city={city} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No cities found matching your search.</p>
      )}
    </div>
  );
}