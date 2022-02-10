import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const fetchSignUp = credentials =>
    axios.post('/users/registration', credentials);

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');

const fetchCurrent = () => axios.get('/users/current');

const fetchBalance = balance => axios.patch('/users/balance', { balance });

const googleAuth = () => axios.get('./users/google');

const googleRedirect = () => axios.get('/users/google-redirect');

export {
    token,
    fetchSignUp,
    fetchLogin,
    fetchLogout,
    fetchCurrent,
    fetchBalance,
    googleAuth,
    googleRedirect,
};
