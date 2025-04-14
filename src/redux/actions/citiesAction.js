import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllData } from "../../components/axios";

export const fetchCities = createAsyncThunk(
    'cities/fetchAll',
    async (API_URL) => {
        const response = await getAllData(API_URL, true);
        return response;
    }
);