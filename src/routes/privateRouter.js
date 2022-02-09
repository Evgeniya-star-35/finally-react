import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuth, component: Component }) {
    return <>{!isAuth ? <Navigate to="/" /> : <Component />}</>;
}
