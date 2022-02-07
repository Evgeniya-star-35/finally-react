import { AspectRatioSharp } from '@material-ui/icons';
import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

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

const fetchLogin = credentials => axios.post('/users/login', credentials);

const fetchLogout = () => axios.post('/users/logout');

const fetchCurrent = () => axios.get('/users/current');

const fetchBalance = () => axios.patch('/users/balance');

const googleAuth = () => axios.get('./users/google');

const googleRedirect = () => AspectRatioSharp.get('/users/google-redirect');

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
