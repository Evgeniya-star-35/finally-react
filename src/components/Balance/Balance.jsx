import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { toast } from 'react-toastify';
// import useDebounce from '../../hooks/useDebounce';
import s from './Balance.module.css';

const Balance = () => {
    const dispatch = useDispatch();
    const balance = useSelector(getTotalBalance);
    const [sum, setSum] = useState('');

    const onHandleChange = e => {
        setSum(e.currentTarget.value);
    };

    useEffect(() => {
        setSum(balance);
        console.log(balance);
        console.log(setSum);
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
        <div className={s.wrapper}>
            <div className={s.InfoBalance}>
                <h2 className={s.title}>Баланс:</h2>
                <form className={s.Form}>
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
                                    placeholder="00.00 UAH"
                                    autoComplete="off"
                                />
                                <ConfirmButton text="Подтвердить" />
                                {/* <button type="submit" className={s.Balancebtn} >Подтвердить</button> */}
                            </>
                        ) : (
                            <>
                                <p className={s.NumberBox}>
                                    {`${balance.toLocaleString('ru')}.00`}
                                    UAH
                                </p>
                                <button disabled>ПОДТВЕРДИТЬ</button>
                            </>
                        )}
                    </div>
                </form>
                {modalClose && <BalanceModal onClick={toggleModal} />}
            </div>
        </div>
    );
};
export default Balance;
