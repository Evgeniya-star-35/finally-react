import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Media from 'react-media';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './GoBack.module.css';

export default function GoBackArrow() {
    const location = useLocation();
    return (
        <Media
            query="(max-width: 767.98px)"
            render={() => (
                <div className={s.wrap}>
                    <button className={s.GoBackArrow} type="button">
                        <Link
                            to={{
                                pathname: '/mainPage',
                                state: {
                                    from: { location },
                                },
                            }}
                            className={s.link}
                        >
                            <svg width="24" height="24">
                                <use
                                    href={`${sprite}#icon-keyboard_backspace-24px-1`}
                                ></use>
                            </svg>
                        </Link>
                    </button>
                </div>
            )}
        />
    );
}
