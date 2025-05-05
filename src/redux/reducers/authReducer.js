import {createReducer} from '@reduxjs/toolkit';
import {login, setUser, logout, signUp } from '../actions/authAction';

const initialState = {
    user: null,
    token: null,
    status: 'idle', // 'idle', 'pending', 'succeeded', 'failed'
    error: null,
};

export const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.response;
            state.token = action.payload.token; 
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(login.pending, (state) => {
            state.status = 'pending';
            state.error = null;
            state.user = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.error = {
                type: action.payload.type,
                details: action.payload.details
            };
            state.user = null;
            state.token = null;
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.status = 'succeeded';
        })
        .addCase(logout.pending, (state) => {
            console.log('Logout pending'); // Debug
            state.status = 'pending';
        })
        .addCase(logout.fulfilled, (state) => {
            console.log('Logout fulfilled'); // Debug
            state.user = null;
            state.token = null;
            state.status = 'idle';
            state.error = null;
        })
        .addCase(logout.rejected, (state, action) => {
            console.log('Logout rejected:', action.payload); // Debug
            state.status = 'failed';
            state.error = action.payload;
        })
        .addCase(signUp.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        })
        .addCase(signUp.fulfilled, (state) => {
            state.status = 'succeeded';
            state.error = null;
        })
        .addCase(signUp.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
});