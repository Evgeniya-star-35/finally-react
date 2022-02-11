// import {
//     setTotalBalanceSuccess,
//     setTotalBalanceError,
// } from 'redux/transactions';

/////////////////////////////
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk(
    '/users/registration',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/registration', userData);
            token.set(data.token);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);
export const login = createAsyncThunk(
    '/users/login',
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', userData);
            token.set(data.data.token);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);
export const logout = createAsyncThunk(
    '/users/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const persistToken = state.auth.token;
        if (!persistToken) {
            return rejectWithValue();
        }
        token.set(persistToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);
export const getBalance = createAsyncThunk(
    'auth/balance',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.patch('/users/balance');
            return data;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    },
);
