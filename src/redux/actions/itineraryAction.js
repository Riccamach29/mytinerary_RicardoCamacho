import { createAsyncThunk } from "@reduxjs/toolkit";
import { getOneData } from "../../components/axios";

const fetchItineraries = createAsyncThunk(
    'itineraries/fetchByCity',
    async ({ API_URL, cityId }) => {
        const response = await getOneData(API_URL, cityId);
        return response.response;
    }
);

export { fetchItineraries };