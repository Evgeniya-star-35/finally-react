import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ component: Component }) {
    const token = useSelector(state => state.auth.token);
    return token ? <Navigate to="/mainPage" /> : Component;
}
