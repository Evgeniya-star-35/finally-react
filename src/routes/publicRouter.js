import { Navigate } from 'react-router-dom';

export default function PublicRoute({ isAuth, component }) {
    return isAuth ? <Navigate to="/mainPage" /> : component;
}
