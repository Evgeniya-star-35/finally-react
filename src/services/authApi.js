import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const fetchSignUp = credentials =>
    axios.post('/users/registration', credentials);

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');

const fetchCurrent = () => axios.get('/users/current');

const fetchBalance = balance => axios.patch('/users/balance', { balance });

const googleAuth = () => axios.get('./users/google');

const googleRedirect = () => axios.get('/users/google-redirect');

export {
    fetchSignUp,
    fetchLogin,
    fetchLogout,
    fetchCurrent,
    fetchBalance,
    googleAuth,
    googleRedirect,
};
