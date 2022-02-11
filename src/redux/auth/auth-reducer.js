import { createSlice } from '@reduxjs/toolkit';

import {
    register,
    login,
    getCurrentUser,
    logout,
    getBalance,
    googleAuth,
} from './auth-operations';
const initialState = {
    user: { email: '' },
    token: '',
    isLoading: false,
    isAuth: false,
    error: null,
    isGetCurrentUser: false,
    balance: 0,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.pending](state, _) {
            state.isLoading = true;
        },
        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
            state.balance = payload.balance;
        },
        [register.rejected](state, { payload }) {
            state.error = payload;
            state.isLoading = false;
        },
        [login.pending](state, _) {
            state.isLoading = true;
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.data.user;
            state.token = payload.data.token;
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
            state.isGetCurrentUser = true;
            state.balance = payload.balance;
        },
        [login.rejected](state, { payload }) {
            state.error = payload;
            state.isLoading = false;
        },
        [logout.fulfilled](state, _) {
            state.user = { email: '' };
            state.token = '';
            state.error = null;
            state.isAuth = false;
        },
        [logout.rejected](state, { payload }) {
            state.error = payload;
            state.isLoading = false;
        },
        [getCurrentUser.pending](state) {
            state.isLoading = true;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
            state.balance = payload.balance;
            state.isGetCurrentUser = true;
        },
        [getCurrentUser.rejected](state) {
            state.isGetCurrentUser = false;
            state.isLoading = false;
        },
        [getBalance.fulfilled](state, { payload }) {
            state.balance = payload.balance;
        },
        [googleAuth.fulfilled](state, _) {
            state.isAuth = true;
        },
    },
});

export default authSlice.reducer;
