import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import ItineraryCard from "../components/itineraryCard";
import { fetchItineraries } from "../redux/actions/itineraryAction";
import { statusTypes } from "../redux/reducers/itineraryReducer";

export default function CityDetails() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityId = searchParams.get("cityId");
  const API_URL = "http://localhost:8080/api/itineraries/itinerariesByCity";

  const { cityData } = location.state || {};
  
  const { itineraries, status, error } = useSelector(state => state.itineraries);
  const isLoading = status === statusTypes.PENDING;

  useEffect(() => {
    if (cityId) {
      dispatch(fetchItineraries({ API_URL, cityId }));
    }
  }, [dispatch, cityId, API_URL]);

  return (
    <div className="min-h-screen pt-22 bg-[#e2e8f0] flex flex-col items-center justify-center">
    <div className="w-[90vw] lg:w-[75vw] bg-gray-600 rounded-lg shadow-lg p-2 text-center">
        <h2 className="text-3xl text-yellow-600  mb-2">{cityData?.name || "N/A"}</h2>

        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto" />
        ) : itineraries && itineraries.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4">
            {itineraries.map((itinerary) => (
              <ItineraryCard key={itinerary._id} itinerary={itinerary} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No itineraries available for this city.
          </p>
        )}

        <div className="mt-6">
          <Button ruta="/cities" text="Back to Cities" />
        </div>
      </div>
    </div>
  );
}