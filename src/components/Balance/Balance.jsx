import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import transactionsOperations from 'redux/transactions/transactions-operations';
import s from './Balance.module.css';

const Balance = () => {
    const dispatch = useDispatch();
    // const balance = useSelector(getTotalBalance);
    const balance = useSelector(state => state.auth.user.balance);
    useEffect(() => {
        setSum(balance);
        dispatch(transactionsOperations.setBalanceOperation(balance));
    }, [balance, dispatch]);
    const [sum, setSum] = useState('');

    const onHandleChange = e => {
        setSum(e.currentTarget.value);
    };
    const onFormSubmit = e => {
        e.preventDefault();
        // console.log('сума', sum);
        dispatch(transactionsOperations.setBalanceOperation(sum));
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
                        {balance === null ||
                        balance === 0 ||
                        balance === undefined ? (
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
