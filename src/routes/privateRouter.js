import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth';

export default function PrivateRoute({ component: Component }) {
    const isAuth = useSelector(getIsAuth);
    console.log(isAuth);
    return isAuth ? Component : <Navigate to="/" />;
}
