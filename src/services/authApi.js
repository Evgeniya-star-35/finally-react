import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api/v1/';

//--------------------------------auth-operations-------------------------------
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const fetchSignUp = credentials =>
    axios.post('/api/users/registration', credentials);

const fetchLogin = credentials => axios.post('/api/users/login', credentials);

const fetchLogout = () => axios.post('/api/users/logout');

const fetchCurrent = () => axios.get('/api/users/current');

const fetchBalance = () => axios.patch('/api/users/balance');

export {
    token,
    fetchSignUp,
    fetchLogin,
    fetchLogout,
    fetchCurrent,
    fetchBalance,
};
