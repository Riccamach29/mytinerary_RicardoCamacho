import { createReducer } from "@reduxjs/toolkit";
import { fetchCities } from "../actions/citiesAction";

export const statusTypes = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
};

const initialState = {
    cities: [],
    status: statusTypes.IDLE,
    error: null
};

const citiesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCities.pending, (state) => {
            state.status = statusTypes.PENDING;
        })
        .addCase(fetchCities.fulfilled, (state, action) => {
            state.cities = action.payload;
            state.status = statusTypes.SUCCEEDED;
        })
        .addCase(fetchCities.rejected, (state, action) => {
            state.status = statusTypes.FAILED;
            state.error = action.error.message;
        });
});

export default citiesReducer;