// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import queryString from 'query-string';

import BackgroundHome from 'components/BackgroundHome/BackgroundHome';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
// import LoginForm from 'components/LoginForm';
// import RegisterForm from 'components/RegisterForm';

// import {
//     loginGoogleSuccess,
//     refreshLoginGoogleSuccess,
// } from '../../redux/auth';

// import s from './HomePage.module.css';

const HomePage = ({ location }) => {
    // const { refreshToken, token } = queryString.parse(location.search);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     if (token) {
    //         dispatch(loginGoogleSuccess(token));
    //         dispatch(refreshLoginGoogleSuccess(refreshToken));
    //     }
    // }, [dispatch, token, refreshToken]);
    // const [login, setLogin] = useState(true);
    // const onRegisterClick = () => {
    //     setLogin(false);
    // };
    // const onComeBackClick = () => {
    //     setLogin(true);
    // };

    return (
        <>
            <Header />
            <AuthHeader />
            <BackgroundHome />

            {/* {login ? (
             <RegisterForm onClickComeBack={onComeBackClick} />
            ) : (
             <LoginForm onClickRegister={onRegisterClick} />
             )}
             <div className={s.bcgImageBottom}></div> */}
        </>
    );
};
export default HomePage;
