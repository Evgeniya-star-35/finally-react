import { getTotalBalance } from '../../redux/transactions/transactions-selectors';
// витягнути з селектів редакс баланс.якщо баланс = 0,тоді модалка+кнопка,якщо ні то модалку не рендити,а тільки кнопку
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ConfirmButton from 'components/Buttons/ConfirmButton';
import BalanceModal from 'components/Modal/BalanceModal/BalanceModal';
import GoToReports from 'components/GoToReports';
import s from './Balance.module.css';

const Balance = () => {
    // const dispatch = useDispatch();
    const balance = useSelector(getTotalBalance);

    const [sum, setSum] = useState('');

    const onHandleChange = e => setSum(e.currentTarget.value);
    useEffect(() => {
        setSum(balance);
    }, [balance, setSum]);
    //Модалка
    const [modalClose, setModalClose] = useState(true);
    const toggleModal = () => {
        setModalClose(!modalClose);
    };

    return (
      <>
            <div className={s.wrapper}>
                <GoToReports />
                  <div className={s.InfoBalance}>
                    <h2 className={s.title}>Баланс:</h2>
                    <form className={s.Form}>
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
                                    <ConfirmButton text="Подтвердить" />
                                    {/* <button type="submit" className={s.Balancebtn} >Подтвердить</button> */}
                                </>
                            ) : (
                                <>
                                    <p className={s.NumberBox}>
                                        {`${balance.toLocaleString('ru')}.00`}{' '}
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
        </>
    );
};
export default Balance;
