import s from './GoogleButton.module.css';

export default function GoogleButton(props) {
    return <button className={s.googleBtn}>{props.text}</button>;
}
