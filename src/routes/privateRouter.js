import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ component: Component }) {
    const token = useSelector(state => state.auth.token);
    return !token ? <Navigate to="/" /> : Component;
}
