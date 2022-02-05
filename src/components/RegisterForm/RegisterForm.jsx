import Button from '../Buttons/Button';
import s from './RegisterForm.module.css';

export default function RegisterForm() {
    return (
        <div className={s.FormContent}>
            <p className={s.FormContent_text}>
                Вы можете авторизоваться с помощью Google Account:
            </p>
            <a
                className={s.FormContent_button}
                href="https://finally-node.herokuapp.com/api/auth/google"
            >
                <span></span>
                Google
            </a>
            <p className={s.FormContent_textA}>
                Или зайти с помощью e-mail и пароля, предварительно
                зарегистрировавшись:
            </p>
            <div>
                <div className={s.AuthNav_wrapper}>
                    <form className="AuthNav_form" autocomplete="off">
                        <label className={s.AuthNav_label__2}>
                            <p className={s.AuthNav_description}>Имя</p>
                            <input
                                className={s.AuthNav_input}
                                type="text"
                                name="name"
                                required
                                value
                            ></input>
                        </label>
                        <label className={s.AuthNav_label__3}>
                            <p className={s.AuthNav_description}>
                                Электронная почта
                            </p>
                            <input
                                className={s.AuthNav_input}
                                type="email"
                                name="email"
                                required
                                value
                            ></input>
                        </label>
                        <label className={s.AuthNav_label__4}>
                            <p className={s.AuthNav_description}>Пароль: </p>
                            <input
                                className={s.AuthNav_input}
                                placeholder="более 8 символов"
                                type="password"
                                name="password"
                                required
                                value
                            ></input>
                        </label>
                        <div>
                            <Button text={'войти'} type="submit" />
                            <Button text={'регистрация'} type="button" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
