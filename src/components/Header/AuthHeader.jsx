import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import s from './Header.module.css';
import st from '../Modal/Modal.module.css';
import Media from 'react-media';
import { toast } from 'react-toastify';
import { logout } from '../../redux/auth/auth-operations';
import { getUserAvatar, getUserEmail } from 'redux/auth';
import ModalLogout from 'components/Modal/Modal';
import Button from '../../components/Buttons/Button';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import defaultImg from '../../images/avatar.jpg';

export default function AuthHeader() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const avatarUrl = useSelector(getUserAvatar);
    const userEmail = useSelector(getUserEmail);

    const nameUser = userEmail.split('@')[0];

    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const handleLogout = () => {
        dispatch(logout());
        toggleModal();
        toast.success('Спасибо за визит!Ждём Вас снова!', {
            position: 'top-center',
            autoClose: 2500,
        });
    };
    return (
        <header className={s.authHeader}>
            <Link to="/">
                <svg width="90" height="31" className={s.logo}>
                    <use href={`${sprite}#icon-logo`}></use>
                </svg>
            </Link>
            <div className={s.authImg}>
                <img
                    src={avatarUrl ? avatarUrl : defaultImg}
                    alt="user avatar"
                    className={s.avatar}
                />
                <Media
                    query="(max-width: 767.98px)"
                    render={() => (
                        <button
                            className={s.logoutDoor}
                            type="button"
                            onClick={toggleModal}
                        >
                            <svg width="16" height="16">
                                <use href={`${sprite}#icon-logout`}></use>
                            </svg>
                        </button>
                    )}
                />
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <>
                            <span className={s.userName}>{nameUser}</span>
                            <button
                                className={s.logoutBtn}
                                onClick={toggleModal}
                            >
                                Выйти
                            </button>
                        </>
                    )}
                />
            </div>
            {showModal && (
                <ModalLogout onClose={toggleModal}>
                    <button className={st.close} onClick={toggleModal}>
                        <svg width="12" height="12">
                            <use href={`${sprite}#icon-close`}></use>
                        </svg>
                    </button>
                    <p className={st.modalTxt}>
                        Вы действительно хотите выйти?
                    </p>

                    <div className={st.modalBtns}>
                        <Button
                            type="button"
                            onClick={handleLogout}
                            text={'да'}
                        />
                        <Button
                            type="button"
                            onClick={toggleModal}
                            text={'нет'}
                        />
                    </div>
                </ModalLogout>
            )}
        </header>
    );
}
