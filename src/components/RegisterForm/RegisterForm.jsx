import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth';
import Button from '../Buttons/Button';
import styles from './RegisterForm.module.css';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [required, setRequired] = useState(false);

    const onLogIn = () => dispatch(register.logIn({ email, password }));

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (email === '' || password === '') {
            setRequired(true);
            return;
        } else {
            setRequired(false);
        }
        onLogIn();
        reset();
    };

    return (

        <form onSubmit={handleSubmit} className={styles.form} autoComplete="on">
            <p className={styles.textGoogle}>
                Вы можете авторизоваться с помощью Google Account:
            </p>
            <div>
                <a
                    className={styles.FormContent_button}

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

            <p className={styles.text}>
                Или зайти с помощью e-mail и пароля, предварительно
                зарегистрировавшись:
            </p>
            <label className={styles.label}>
                {required && <span className={styles.span_star}>*</span>}
                Электронная почта:
                <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={email}
                    placeholder="your@email.com"
                    onChange={handleChange}
                />
                {required && (
                    <span className={styles.span_required}>
                        это обязательное поле
                    </span>
                )}
            </label>
            <label className={styles.label}>
                {required && <span className={styles.span_star}>*</span>}
                Пароль:
                <input
                    className={styles.input}
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Пароль"
                    onChange={handleChange}
                />
                {required && (
                    <span className={styles.span_required}>
                        это обязательное поле
                    </span>
                )}
            </label>
            <div className={styles.button__container}>

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
