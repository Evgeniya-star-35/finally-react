import s from './Button.module.css';

export default function Button(props) {
    return <button className={s.Btn}>{props.text}</button>;
}
