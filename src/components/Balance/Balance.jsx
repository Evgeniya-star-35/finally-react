import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import { getCurrentBalanceSelector } from '../../redux/auth/auth-selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import {
    setBalance,
    getCurrentBalance,
} from '../../redux/auth/auth-operations';
// import transactionsOperations from 'redux/transactions/transactions-operations';
import s from './Balance.module.css';

const Balance = () => {
    const dispatch = useDispatch();
    const balance = useSelector(getCurrentBalanceSelector);
    const transactions = useSelector(getTransactionsMonth);
    console.log(transactions);
    console.log(balance);
    useEffect(() => {
        dispatch(getCurrentBalance());
    }, [dispatch, transactions]);
    const [sum, setSum] = useState(0);
    const onHandleChange = e => {
        setSum(e.currentTarget.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        const data = { balance: Number(sum) };
        dispatch(setBalance(data));
    };

    const [modalClose, setModalClose] = useState(true);
    const toggleModal = () => {
        setModalClose(!modalClose);
    };
    return (
        <div className={s.wrapper}>
            <div className={s.InfoBalance}>
                <h2 className={s.title}>Баланс:</h2>
                <form onSubmit={onFormSubmit} className={s.Form}>
                    <div className={s.FormInfo}>
                        {!balance ? (
                            <>
                                <input
                                    id="balance"
                                    type="text"
                                    pattern="^[0-9]+$"
                                    className={s.Input}
                                    name="name"
                                    maxLength="5"
                                    onChange={onHandleChange}
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
                                    {`${balance
                                        .toFixed(2)
                                        .toLocaleString('ru')}`}{' '}
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
