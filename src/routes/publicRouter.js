import { Navigate } from 'react-router-dom';

export default function PublicRoute({ isAuth, element: Component }) {
    return (
        <>
            {isAuth ? (
                <Navigate to="/balance" /> && <Component />
            ) : (
                <Component />
            )}
        </>
    );
}
