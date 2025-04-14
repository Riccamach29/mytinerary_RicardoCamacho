import { createReducer } from "@reduxjs/toolkit";
import { fetchItineraries } from "../actions/itineraryAction";

export const statusTypes = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
};

const initialState = {
    itineraries: [],
    status: statusTypes.IDLE,
    error: null
};

const itineraryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchItineraries.pending, (state) => {
            state.status = statusTypes.PENDING;
        })
        .addCase(fetchItineraries.fulfilled, (state, action) => {
            state.itineraries = action.payload;
            state.status = statusTypes.SUCCEEDED;
        })
        .addCase(fetchItineraries.rejected, (state, action) => {
            state.status = statusTypes.FAILED;
            state.error = action.error.message;
        });
});

export default itineraryReducer;