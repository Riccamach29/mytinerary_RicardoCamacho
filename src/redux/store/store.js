import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filterReducer";
import itineraryReducer from "../reducers/itineraryReducer";
import citiesReducer from "../reducers/citiesReducer";
import carouselReducer from "../reducers/carruselReducer";
import {authReducer} from "../reducers/authReducer";


const store = configureStore({
    reducer: {
        filter: filterReducer,
        itineraries: itineraryReducer,
        cities: citiesReducer,
        carousel: carouselReducer,
        auth: authReducer
    },
     devTools: process.env.NODE_ENV !== 'production'
});

export default store;