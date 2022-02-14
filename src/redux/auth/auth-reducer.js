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
    user: { email: '', avatar: '', balance: 0 },
    token: '',
    isLoading: false,
    isAuth: false,
    error: null,
    isGetCurrentUser: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        // [register.pending](state, _) {
        //     state.isLoading = true;
        // },
        // [register.fulfilled](state, { payload }) {
        //     state.user = payload.user;
        //     // state.token = payload.token;
        //     state.avatar = payload.data.avatar;
        //     state.email = payload.data.email;

        //     state.error = null;
        //     state.isLoading = false;
        //     state.balance = payload.balance;
        // },
        // [register.rejected](state, { payload }) {
        //     state.error = payload;
        //     state.isLoading = false;
        // },
        [login.pending](state, _) {
            state.isLoading = true;
        },
        [login.fulfilled](state, { payload }) {
            state.user = payload.data.user;
            state.token = payload.data.token;
            state.user.avatar = payload.data.user.avatar;
            state.user.email = payload.data.user.email;
            state.user.balance = payload.data.user.balance;
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
            state.isGetCurrentUser = true;
        },
        [login.rejected](state, { payload }) {
            state.error = payload;
            state.isLoading = false;
        },
        [logout.fulfilled](state, _) {
            state.user = { email: '', avatar: '', balance: 0 };
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
            state.user.balance = payload.user.balance;
            state.isGetCurrentUser = true;
            state.user.avatar = payload.user.avatar;
            state.user.email = payload.user.email;
        },
        [getCurrentUser.rejected](state) {
            state.isGetCurrentUser = false;
            state.isLoading = false;
        },
        [getBalance.fulfilled](state, { payload }) {
            state.user.balance = payload.balance;
        },
        [googleAuth.fulfilled](state, { payload }) {
            state.token = payload;
            state.isAuth = true;
        },
    },
});

export default authSlice.reducer;
