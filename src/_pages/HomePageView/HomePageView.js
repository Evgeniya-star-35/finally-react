import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import queryString from 'query-string';

import s from './HomePageView.module.css';

import imgText from '../../img/svg/Union.svg';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import {
    loginGoogleSuccess,
    refreshLoginGoogleSuccess,
} from '../../redux/auth';

const HomePageView = ({ location }) => {
    const { refreshToken, token } = queryString.parse(location.search);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(loginGoogleSuccess(token));
            dispatch(refreshLoginGoogleSuccess(refreshToken));
        }
    }, [dispatch, token, refreshToken]);

    const [login, setLogin] = useState(true);
    const onRegisterClick = () => {
        setLogin(false);
    };

    const onComeBackClick = () => {
        setLogin(true);
    };
    return (
        <>
            <div className={s.container}>
                <div className={s.firstSection}>
                    <div className={s.bcgImage}></div>
                    <div className={s.text}>
                        <img
                            className={s.imgText}
                            src={imgText}
                            alt="Kapusta"
                        />
                        <h1 className={s.fontText}>SMART FINANSE</h1>
                    </div>
                </div>
                <div className={s.secondSection}>
                    {login ? (
                        <LoginForm onClickRegister={onRegisterClick} />
                    ) : (
                        <RegisterForm onClickComeBack={onComeBackClick} />
                    )}
                    <div className={s.bcgImageBottom}></div>
                </div>
            </div>
        </>
    );
};

export default HomePageView;
