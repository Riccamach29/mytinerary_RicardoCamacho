import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllData } from "../../components/axios";

const fetchCarouselImages = createAsyncThunk(
    'carousel/fetchImages',
    async (API_URL) => {
        const citiesData = await getAllData(API_URL, true);
        return citiesData.map(city => city.photo);
    }
);

export { fetchCarouselImages };