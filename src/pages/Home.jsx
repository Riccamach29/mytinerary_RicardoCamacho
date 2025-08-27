import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carrusel";
import { fetchCarouselImages } from "../redux/actions/carruselAction";
import { statusTypes } from "../redux/reducers/carruselReducer";

export default function Home() {
  const dispatch = useDispatch();
  const { images, status, error } = useSelector(state => state.carousel);
  const isLoading = status === statusTypes.PENDING;
  const API_URL = "https://mytinerary-back-ricardocamacho.onrender.com/api/cities/allCities";

  useEffect(() => {
    dispatch(fetchCarouselImages(API_URL));
  }, [dispatch]);

  return (
    <div className="min-h-screen pt-22 bg-[#e2e8f0] flex flex-col items-center justify-center">
      <div className="w-[80vw] bg-blue-200 rounded-lg shadow-lg p-2 text-center">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent mx-auto" />
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : images.length > 0 ? (
          <Carousel images={images} />
        ) : (
          <p className="text-gray-500">No images available.</p>
        )}
      </div>
    </div>
  );
}