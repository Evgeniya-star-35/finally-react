import s from './GoogleButton.module.css';

export default function GoogleButton(props) {
    return (
        <button className={s.googleBtn} type="submit">
            {props.text}
        </button>
    );
}
