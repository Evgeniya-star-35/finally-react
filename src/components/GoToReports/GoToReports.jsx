import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './GoToReports.module.css';

export default function GoToReports() {
    const location = useLocation();

    return (
        <button type="button" className={s.button}>
            <Link
                to={{
                    pathname: '/balance',
                    state: {
                        from: { location },
                    },
                }}
                className={s.link}
            >
                <span className={s.text}>Перейти к отчетам</span>
                <svg width="24" height="24" className={s.icon}>
                    <use href={`${sprite}#icon-bar_chart-24px`}></use>
                </svg>
            </Link>
        </button>
    );
}
