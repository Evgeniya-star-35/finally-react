import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth';

export default function PrivateRoute({ component }) {
    const isAuth = useSelector(getIsAuth);
    return !isAuth ? <Navigate to="/" /> : component;
}
