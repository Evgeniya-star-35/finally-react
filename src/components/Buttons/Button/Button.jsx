import s from './Button.module.css';

export default function Button({ text, onClick, type = 'submit' }) {
    return (
        <button className={s.Btn} onClick={onClick} type={type}>
            {text}
        </button>
    );
}
