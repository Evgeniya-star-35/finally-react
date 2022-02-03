import s from './Button.module.css';

export default function Button(props) {
    return (
        <button className={s.Btn} type="submit">
            {props.text}
        </button>
    );
}
