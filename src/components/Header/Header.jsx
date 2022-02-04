import logo from '../../img/logo-kapusta.svg';

import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" className={s.logo} />
        </header>
    );
}
