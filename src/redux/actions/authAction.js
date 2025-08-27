import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({email, password}, {rejectWithValue}) => {
    try {
        const user = {email, password};
        const response = await axios.post('https://mytinerary-back-ricardocamacho.onrender.com/api/auth/signIn', user);
        localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
        return response.data;
    } catch (error) {
        if (error.response) {
            const errorMessage = {
                type: error.response.data.message, // Error de validación
                details: error.response.data.errors?.map(err => err.message) || [] // Array de mensajes específicos
            };
            return rejectWithValue(errorMessage);
        }
        return rejectWithValue('Error to sign in');
    }
});

export const setUser = createAction('auth/setUser')

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem('token');
            console.log('Token before logout:', token); // Debug

            const response = await axios.post(
                'https://mytinerary-back-ricardocamacho.onrender.com/api/auth/signOut',
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            
            console.log('Logout response:', response); // Debug
            localStorage.removeItem('token');
            return response.data;
        } catch (error) {
            console.error('Logout error:', error); // Debug
            return rejectWithValue(error.response?.data || 'Error en logout');
        }
    }
);

export const signUp = createAsyncThunk(
    'auth/signUp',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('https://mytinerary-back-ricardocamacho.onrender.com/api/users/createOne', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);