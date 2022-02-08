import s from './Balance.module.css';
import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { toast } from 'react-toastify';
// import useDebounce from '../../hooks/useDebounce';
const Balance = () => {
    const dispatch = useDispatch();
    const balance = useSelector(getTotalBalance);
    const [sum, setSum] = useState('');
    const onHandleChange = e => {
        if (typeof e.currentTarget.value !== Number) {
            toast.success('Введите число!');
            return;
        }
        setSum(e.currentTarget.value);
    };
    // const debouncedSearchSum = useDebounce(sum, 1000);
    useEffect(() => {
        // if(debouncedSearchSum){
        setSum(balance);
        console.log(balance);
        console.log(setSum);
        // }
    }, [balance]);

    const onFormSubmit = e => {
        e.preventDefault();
        dispatch(transactionsOperations.setBalanceOperation(sum));
    };
    //Модалка
    const [modalClose, setModalClose] = useState(true);
    const toggleModal = () => {
        setModalClose(!modalClose);
    };
    return (
        <div className={s.InfoBalance}>
            <form onSubmit={onFormSubmit} className={s.Form}>
                <label for="balance" className={s.Label}>
                    Баланс:
                </label>
                <div className={s.FormInfo}>
                    {balance === 0 ? (
                        <>
                            <input
                                id="balance"
                                type="text"
                                className={s.Input}
                                name="name"
                                maxLength="5"
                                onChange={onHandleChange}
                                placeholder="00.00 UAH"
                                autoComplete="off"
                            />
                            <ConfirmButton type="submit" text="Подтвердить" />
                        </>
                    ) : (
                        <>
                            <p className={s.Numberbox}>
                                {`${balance.toLocaleString('ru')}.00`} UAH
                            </p>
                            <button disabled>ПОДТВЕРДИТЬ</button>
                        </>
                    )}
                </div>
            </form>
            {modalClose && <BalanceModal onClick={toggleModal} />}
        </div>
    );
};
export default Balance;
