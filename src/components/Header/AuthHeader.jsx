import { useState } from 'react';
import ModalLogout from 'components/Modal/Modal';
import Button from '../../components/Buttons/Button';
import Avatar from 'react-avatar';
import Media from 'react-media';
import logo from '../../images/logo.png';
import logout from '../../images/globalIcons/logout.svg';
import close from '../../images/globalIcons/close.svg';

import s from './Header.module.css';
import st from '../Modal/Modal.module.css';

export default function AuthHeader() {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
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
                        <img
                            src={logout}
                            alt="logout"
                            className={s.logoutSvg}
                        />
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
                        <img src={close} alt={'close'} />
                    </button>
                    <p className={st.modalTxt}>
                        Вы действительно хотите выйти?
                    </p>

                    <div className={st.modalBtns}>
                        <Button type="button" onClick={''} text={'да'}></Button>
                        <Button
                            type="button"
                            onClick={toggleModal}
                            text={'нет'}
                        ></Button>
                    </div>
                </ModalLogout>
            )}
        </header>
    );
}
