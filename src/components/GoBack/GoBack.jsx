import Media from 'react-media';
import s from './GoBack.module.css';
import sprite from '../../images/globalIcons/symbol-defs.svg';

export default function GoBackArrow() {
    return (
        <Media
            query="(max-width: 767.98px)"
            render={() => (
                <button className={s.GoBackArrow} type="button">
                    <svg width="24" height="24">
                        <use
                            href={`${sprite}#icon-keyboard_backspace-24px-1`}
                        ></use>
                    </svg>
                </button>
            )}
        />
    );
}
