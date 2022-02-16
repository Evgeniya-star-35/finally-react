import { createSlice } from '@reduxjs/toolkit';

import {
    login,
    getCurrentUser,
    logout,
    setBalance,
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
        [login.pending](state, _) {
            state.isLoading = true;
        },
        [login.fulfilled](state, { payload }) {
            state.token = payload.data.token;
            state.user.avatar = payload.data.user.avatar;
            state.user.email = payload.data.user.email;
            state.user.balance = payload.data.user.balance;
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
        },
        [login.rejected](state, { payload }) {
            state.error = payload;
            state.isLoading = false;
            state.isAuth = false;
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
            state.isGetCurrentUser = false;
        },
        [getCurrentUser.fulfilled](state, { payload }) {
            state.isAuth = true;
            state.error = null;
            state.isLoading = false;
            state.user.balance = payload.balance;
            state.user.avatar = payload.avatar;
            state.user.email = payload.email;
            state.isGetCurrentUser = false;
        },
        [getCurrentUser.rejected](state) {
            state.isLoading = false;
            state.isGetCurrentUser = false;
        },
        [setBalance.fulfilled](state, { payload }) {
            state.user.balance = payload;
        },
        [googleAuth.fulfilled](state, { payload }) {
            state.token = payload;
            state.isAuth = true;
        },
    },
});
export default authSlice.reducer;
