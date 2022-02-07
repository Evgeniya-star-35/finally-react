import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './Header.module.css';

export default function Header() {
    return (
        <header className={s.header}>
            <svg width="90" height="31" className={s.logo}>
                <use href={`${sprite}#icon-logo`}></use>
            </svg>
        </header>
    );
}
