import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOneData, updateData } from "../../components/axios";



const fetchItineraries = createAsyncThunk(
    'itineraries/fetchByCity',
    async ({ API_URL, cityId }) => {
        const response = await getOneData(API_URL, cityId);
        return response.response;
    }
);

const updateLikes = createAsyncThunk(
    'itineraries/updateLikes',
    async (itineraryData) => {
        const API_URL = "https://mytinerary-back-ricardocamacho.onrender.com/api/itineraries/update";
        const updatedData = {
            _id: itineraryData._id,
            likes: itineraryData.likes + 1
        };
        const response = await updateData(API_URL, null, updatedData);
        // Retornamos el objeto actualizado completo
        return {
            ...itineraryData,
            likes: itineraryData.likes + 1
        };
    }
);

export { fetchItineraries, updateLikes };