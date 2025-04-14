import { createReducer } from "@reduxjs/toolkit";
import { fetchItineraries, updateLikes } from "../actions/itineraryAction";

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
        })
        .addCase(updateLikes.fulfilled, (state, action) => {
            const updatedItinerary = action.payload;
            state.itineraries = state.itineraries.map(itinerary => 
                itinerary._id === updatedItinerary._id ? updatedItinerary : itinerary
            );
            state.error = null;
        })
        .addCase(updateLikes.rejected, (state) => {
            state.error = "Error updating likes";
        });
});

export default itineraryReducer;