import s from './ConfirmButton.module.css';

export default function ConfirmButton(props) {
    return <button className={s.confirmBtn}>{props.text}</button>;
}
