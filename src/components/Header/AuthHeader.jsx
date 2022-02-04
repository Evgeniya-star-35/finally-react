import Avatar from 'react-avatar';
import Media from 'react-media';
import logo from '../../img/logo-kapusta.svg';
import logout from '../../img/logout.svg';

import s from './Header.module.css';

export default function AuthHeader() {
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
                        <img src={logout} alt="logout" className={s.logout} />
                    )}
                />
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <>
                            <span className={s.userName}>User Name</span>
                            <span className={s.stick}></span>
                            <p className={s.logoutText}>Выйти</p>
                        </>
                    )}
                />
            </div>
        </header>
    );
}
