import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Media from 'react-media';
import sprite from '../../../images/globalIcons/symbol-defs.svg';
import s from './GoToMainButton.module.css';

export default function GoToMainButton() {
    const location = useLocation();
    return (
        <>
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <>
                        <button className={s.btn}>
                            <Link
                                to={{
                                    pathname: '/mainPage',
                                    state: {
                                        from: { location },
                                    },
                                }}
                                className={s.link}
                            >
                                <svg width="24" height="24" className={s.svg}>
                                    <use
                                        href={`${sprite}#icon-keyboard_backspace-24px-1`}
                                    ></use>
                                </svg>
                                Вернуться на главную
                            </Link>
                        </button>
                    </>
                )}
            />
        </>
    );
}
