import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from 'redux/auth';

export default function PublicRoute({ component }) {
    const isAuth = useSelector(getIsAuth);
    return isAuth ? <Navigate to="/mainPage" /> : component;
}
