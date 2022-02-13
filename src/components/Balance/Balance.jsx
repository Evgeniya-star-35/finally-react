import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import transactionsOperations from 'redux/transactions/transactions-operations';
import s from './Balance.module.css';
// import { useFormik } from 'formik';

const Balance = () => {
    const dispatch = useDispatch();
    // const balance = useSelector(getTotalBalance);
    const balance = useSelector(state => state.auth.user.user.balance);
    console.log(balance);
    const [sum, setSum] = useState('');

    // без formik
    const onHandleChange = e => {
        setSum(e.currentTarget.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        console.log('сума', sum);
        dispatch(transactionsOperations.setBalanceOperation(balance));
    };

    useEffect(() => {
        setSum(balance);
    }, [balance]);

    //formik
    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //     },
    //     onSubmit: values => {
    //         dispatch(transactionsOperations.setBalanceOperation(sum));
    //         console.log(values);
    //     },
    // validate: values => {
    //     let errors={}
    //     if (!/^[0-9]+$/i.test(values.name)){
    //     errors.name = 'Не правильный формат, введите число!'}
    //      return errors
    // }
    // });
    // console.log(formik.errors);
    // console.log(formik.values);

    const [modalClose, setModalClose] = useState(true);
    const toggleModal = () => {
        setModalClose(!modalClose);
    };
    return (
        <div className={s.wrapper}>
            <div className={s.InfoBalance}>
                <h2 className={s.title}>Баланс:</h2>
                {/* <form onSubmit={formik.handleSubmit} className={s.Form}> */}
                <form onSubmit={onFormSubmit} className={s.Form}>
                    <div className={s.FormInfo}>
                        {balance === 0 ? (
                            <>
                                <input
                                    id="balance"
                                    type="text"
                                    pattern="^[0-9]+$"
                                    className={s.Input}
                                    name="name"
                                    maxLength="5"
                                    onChange={onHandleChange}
                                    // onChange={formik.handleChange}
                                    // value={formik.values.name}
                                    placeholder="00.00 UAH"
                                    autoComplete="off"
                                />
                                <ConfirmButton
                                    type="submit"
                                    text="Подтвердить"
                                />
                                {modalClose && (
                                    <BalanceModal onClick={toggleModal} />
                                )}
                            </>
                        ) : (
                            <>
                                <p className={s.Input}>
                                    {`${balance.toLocaleString('ru')}.00 `}
                                    UAH
                                </p>
                                <ConfirmButton
                                    className={s.HideBtn}
                                    text="Подтвердить"
                                    disabled
                                />
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Balance;
