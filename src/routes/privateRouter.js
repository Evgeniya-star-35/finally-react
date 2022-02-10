import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuth, component }) {
    return !isAuth ? <Navigate to="/" /> : component;
}
