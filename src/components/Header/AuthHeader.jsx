import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';

import ModalLogout from 'components/Modal/Modal';
import Button from '../../components/Buttons/Button';
import Avatar from 'react-avatar';
import Media from 'react-media';
import logo from '../../images/logo.png';
import sprite from '../../images/globalIcons/symbol-defs.svg';

import s from './Header.module.css';
import st from '../Modal/Modal.module.css';

export default function AuthHeader() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const handleLogout = () => {
        dispatch(logOut());
        toggleModal();
    };
    return (
        <header className={s.authHeader}>
            <img src={logo} alt="logo" className={s.logo} />
            <div className={s.authImg}>
                <Avatar
                    name="User"
                    googleId=""
                    size="32"
                    round={true}
                    className={s.avatar}
                    color={'var(--select-accent-bg)'}
                    fgColor={'var(--main-txt-color)'}
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
                            <span className={s.userName}>User Name</span>
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
