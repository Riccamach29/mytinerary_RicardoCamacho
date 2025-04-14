import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../reducers/filterReducer";
import itineraryReducer from "../reducers/itineraryReducer";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        itineraries: itineraryReducer
    }
});

export default store;