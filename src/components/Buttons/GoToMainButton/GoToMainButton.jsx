import Media from 'react-media';
import sprite from '../../../images/globalIcons/symbol-defs.svg';
import s from './GoToMainButton.module.css';

export default function GoToMainButton() {
    return (
        <>
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <>
                        <button className={s.btn} onClick={''}>
                            <svg width="24" height="24" className={s.svg}>
                                <use
                                    href={`${sprite}#icon-keyboard_backspace-24px-1`}
                                ></use>
                            </svg>
                            Вернуться на главную
                        </button>
                    </>
                )}
            />
        </>
    );
}
