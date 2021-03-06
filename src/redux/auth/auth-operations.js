import axios from 'axios';
import { toast } from 'react-toastify';
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

            return data;
        } catch (error) {
            rejectWithValue(error);
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 2500,
            });
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
            toast.error('Введены неверные данные!', {
                position: 'top-center',
                autoClose: 2500,
            });
        }
    },
);
export const logout = createAsyncThunk(
    '/users/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
            return;
        } catch (error) {
            rejectWithValue(error);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const persistToken = state.auth.token;
            if (!persistToken) {
                return rejectWithValue();
            }
            token.set(persistToken);
            const { data } = await axios.get('/users/current');
            return data.data.user;
        } catch (error) {
            rejectWithValue(error.message);
        }
    },
);
export const setBalance = createAsyncThunk(
    'auth/balance',
    async (body, thunkAPI) => {
        try {
            const { data } = await axios.patch('/users/balance', body);
            return data.data.balance;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    },
);

export const googleAuth = createAsyncThunk(
    'auth/google',
    async (userToken, { rejectWithValue }) => {
        try {
            token.set(userToken);
            return userToken;
        } catch (error) {
            rejectWithValue(error.message);
            toast.error(error.message, {
                position: 'top-center',
                autoClose: 2500,
            });
        }
    },
);
