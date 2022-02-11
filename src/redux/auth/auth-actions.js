import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const loginGoogleRequest = createAction('auth/loginGoogleRequest');
const loginGoogleSuccess = createAction('auth/loginGoogleSuccess');
const loginGoogleError = createAction('auth/loginGoogleError');

const authGoogleRequest = createAction('auth/googleRequest');
const authGoogleSuccess = createAction('auth/googleSuccess');
const authGoogleError = createAction('auth/googleError');

const refreshLoginGoogleRequest = createAction(
    'auth/refreshLoginGoogleRequest',
);
const refreshLoginGoogleSuccess = createAction(
    'auth/refreshLoginGoogleSuccess',
);
const refreshLoginGoogleError = createAction('auth/refreshLoginGoogleError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const getUserBalanceRequest = createAction('auth/getUserBalanceRequest');
const getUserBalanceSuccess = createAction('auth/getUserBalanceSuccess');
const getUserBalanceError = createAction('auth/getUserBalanceError');

export {
    registerRequest,
    registerSuccess,
    registerError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    loginRequest,
    loginSuccess,
    loginError,
    loginGoogleRequest,
    loginGoogleSuccess,
    loginGoogleError,
    authGoogleRequest,
    authGoogleSuccess,
    authGoogleError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
    refreshLoginGoogleRequest,
    refreshLoginGoogleSuccess,
    refreshLoginGoogleError,
    getUserBalanceRequest,
    getUserBalanceSuccess,
    getUserBalanceError,
};
