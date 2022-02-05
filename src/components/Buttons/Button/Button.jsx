import s from './Button.module.css';

export default function Button({ text, onClick }) {
    return (
        <button className={s.Btn} onClick={onClick}>
            {text}
        </button>
    );
}
