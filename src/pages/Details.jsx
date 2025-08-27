import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import ItineraryCard from "../components/itineraryCard";
import { fetchItineraries } from "../redux/actions/itineraryAction";
import { statusTypes } from "../redux/reducers/itineraryReducer";
import CityDetailsHero from '../components/CityDetailsHero';

export default function CityDetails() {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cityId = searchParams.get("cityId");
  const API_URL = "https://mytinerary-back-ricardocamacho.onrender.com/api/itineraries/itinerariesByCity";

  const { cityData } = location.state || {};
  const { itineraries, status, error } = useSelector(state => state.itineraries);
  const isLoading = status === statusTypes.PENDING;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (cityId) {
      dispatch(fetchItineraries({ API_URL, cityId }));
    }
  }, [dispatch, cityId, API_URL]);

  if (!cityData) {
    return (
      <div className="min-h-screen bg-[#e2e8f0] flex items-center justify-center">
        <p className="text-xl text-gray-600">City information not available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e2e8f0]">
      {/* Hero Section */}
      <CityDetailsHero city={cityData} />

      {/* Itineraries Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Available Itineraries
          </h3>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent" />
            </div>
          ) : itineraries && itineraries.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {itineraries.map((itinerary) => (
                <div key={itinerary._id} className="flex-1 min-w-[300px] max-w-[400px]">
                  <ItineraryCard 
                    itinerary={itinerary}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">
                No itineraries available for this city yet
              </p>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button 
              ruta="/cities" 
              text="Back to Cities" 
              className="hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}