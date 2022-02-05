import Button from '../Buttons/Button';
import s from './RegisterForm.module.css';

export default function RegisterForm() {
    return (
        <form className={s.form}>
            <p className={s.FormContent_text}>
                Вы можете авторизоваться с помощью Google Account:
            </p>
            <div className={s.form_google}>
                <a
                    className={s.FormContent_button}
                    href="https://finally-node.herokuapp.com/api/auth/google"
                >
                    <span></span>
                    Google
                </a>
            </div>
            <p className={s.FormContent_textA}>
                Или зайти с помощью e-mail и пароля, предварительно
                зарегистрировавшись:
            </p>

            <label className={s.AuthNav_label__3}>
                Электронная почта :
                <input
                    className={s.AuthNav_input}
                    type="email"
                    name="email"
                    // value
                    placeholder="your@email.com"
                ></input>
            </label>
            <label className={s.AuthNav_label__4}>
                Пароль:
                <input
                    className={s.AuthNav_input}
                    placeholder="более 8 символов"
                    type="password"
                    name="password"
                    // value
                    placeholder="Пароль"
                ></input>
            </label>
            <div className={s.Form_button__container}>
                <Button text={'войти'} type="submit" />
                <Button text={'регистрация'} type="button" />
            </div>
        </form>
    );
}
