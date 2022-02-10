import React from 'react';
import Button from '../Buttons/Button';
import styles from './RegisterForm.module.css';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register, login } from '../../redux/auth';

const BasicFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('это обязательное поле'),
    password: Yup.string()
        .min(8, 'Must be longer than 8 characters')
        .required('это обязательное поле'),
});

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleRegister = async (validateForm, values) => {
        const error = await validateForm();
        if (Object.keys(error).length === 0) {
            dispatch(login(values));
        }
    };

    return (
        <>
            <div className={styles.form}>
                <div autoComplete="on">
                    <p className={styles.textGoogle}>
                        Вы можете авторизоваться с помощью Google Account:
                    </p>
                    <div>
                        <a
                            className={styles.FormContent_button}
                            href="https://finally-node.herokuapp.com/api/users/google"
                        >
                            Google
                        </a>
                    </div>
                    <p className={styles.text}>
                        Или зайти с помощью e-mail и пароля, предварительно
                        зарегистрировавшись:
                    </p>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={BasicFormSchema}
                    onSubmit={async value => {
                        dispatch(register(value));
                    }}
                    render={({ errors, touched, validateForm, values }) => (
                        <Form className="form-container">
                            <label className={styles.label} htmlFor="email">
                                Электронная почта:
                                <Field
                                    name="email"
                                    placeholder="your@email.com"
                                    type="email"
                                    className={styles.input}
                                />
                            </label>
                            {errors.email && touched.email && (
                                <div className={styles.span_star}>
                                    {errors.email}
                                </div>
                            )}

                            <label className={styles.label} htmlFor="password">
                                Пароль:
                                <Field
                                    name="password"
                                    placeholder="Пароль"
                                    type="password"
                                    className={styles.input}
                                />
                            </label>
                            {errors.password && touched.password && (
                                <div className={styles.span_star}>
                                    {errors.password}
                                </div>
                            )}

                            <div className={styles.button__container}>
                                <Button
                                    text={'войти'}
                                    type="button"
                                    onClick={() =>
                                        handleRegister(validateForm, values)
                                    }
                                />
                                <Button text={'регистрация'} />
                            </div>
                        </Form>
                    )}
                />
            </div>
        </>
    );
};

export default RegisterForm;
