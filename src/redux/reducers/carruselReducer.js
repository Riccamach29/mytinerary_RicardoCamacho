import { createReducer } from "@reduxjs/toolkit";
import { fetchCarouselImages } from "../actions/carruselAction";

export const statusTypes = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCEEDED: 'succeeded',
    FAILED: 'failed'
};

const initialState = {
    images: [],
    status: statusTypes.IDLE,
    error: null
};

const carouselReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchCarouselImages.pending, (state) => {
            state.status = statusTypes.PENDING;
        })
        .addCase(fetchCarouselImages.fulfilled, (state, action) => {
            state.images = action.payload;
            state.status = statusTypes.SUCCEEDED;
        })
        .addCase(fetchCarouselImages.rejected, (state, action) => {
            state.status = statusTypes.FAILED;
            state.error = action.error.message;
        });
});

export default carouselReducer;