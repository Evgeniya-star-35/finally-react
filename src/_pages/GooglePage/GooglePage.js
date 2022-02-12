import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuth } from '../../redux/auth';
import { googleAuth } from '../../redux/auth';

const GooglePage = () => {
    const isAuth = useSelector(getIsAuth);
    const dispatch = useDispatch();

    const token = new URLSearchParams(document.location.search).get('token');
    console.log('token:', token);

    dispatch(googleAuth(token));
    console.log('isAuth:', isAuth);

    return isAuth ? <Navigate to="/developers" /> : <Navigate to="/" />;
};

export default GooglePage;
