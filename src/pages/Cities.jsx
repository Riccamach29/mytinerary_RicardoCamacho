import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearch } from "../redux/actions/filterActions";
import Fetch from "../components/Fetch";
import PrintCard from "../components/PrintCard";
import Button from "../components/Button";

export default function Cities() {
  const API_URL = "http://localhost:8080/api/cities/allCities";
  const [cities, setCities] = useState([]);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="h-auto min-h-[90vh] bg-[#e2e8f0] text-amber-100 flex flex-col items-center p-6 pt-22">
      <h1 className="text-4xl font-semibold text-red-900 mb-2">Explore Cities</h1>

      <input
        type="text"
        placeholder="Search City..."
        className="w-75 p-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        value={searchTerm}
        onChange={(e) => dispatch(changeSearch(e.target.value))}
      />

      <Fetch apiUrl={API_URL} onDataFetched={setCities} />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => <PrintCard key={city.name} city={city} />)
        ) : (
          <p className="text-red-900 text-lg font-semibold bg-white p-4 rounded-lg shadow-md">
            ❌ No cities start with <span className="font-bold">{searchTerm}</span>
          </p>
        )}
      </div>

      <div className="mt-6">
        <Button ruta={-1} text="Back" />
      </div>
    </div>
  );
}
