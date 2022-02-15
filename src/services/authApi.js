import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const signUp = credentials => axios.post('/users/registration', credentials);

const login = credentials => axios.post('/users/login', credentials);

const logout = () => axios.post('/users/logout');

const getCurrent = () => axios.get('/users/current');

const updateBalance = balance => axios.patch('/users/balance', { balance });

const currentBalance = balance => axios.get('/users/currentBalance', balance);

const googleAuth = () => axios.get('./users/google');

const googleRedirect = () => axios.get('/users/google-redirect');

export {
    signUp,
    login,
    logout,
    getCurrent,
    updateBalance,
    googleAuth,
    googleRedirect,
    currentBalance,
};
