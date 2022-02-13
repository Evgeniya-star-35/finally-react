import Media from 'react-media';
import { store } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import transactionsOperations from 'redux/transactions/transactions-operations';
import {
    getTransactionsDay,
    getTotalBalance,
} from '../../redux/transactions/transactions-selectors';
import {
    getTransactionsByDate,
    getTransactionsByPeriod,
} from '../../services/transactionApi';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionTable.module.css';
import st from '../Modal/Modal.module.css';

export default function TransactionTable({
    type,
    date,
    setNewDate,
    sum,
    category,
    subCategory,
    // transaction,
}) {
    // const dispatch = useDispatch();
    const balance = useSelector(getTotalBalance);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(transactionsOperations.setBalanceOperation(balance));
    }, [date, dispatch, balance]);
    const [transactionId, setTransactionId] = useState('');
    const [modalDelete, setModalDelete] = useState(false);

    const transactionsList = useSelector(getTransactionsDay);

    const filteredTransactions = transactionsList
        .filter(item => item.date === date)
        .reverse();

    const toggleModal = () => {
        setModalDelete(!modalDelete);
    };

    const handleDeleteClick = id => {
        setTransactionId(id);
        toggleModal();
    };
    const onDeleteCancel = () => {
        setTransactionId('');
        setModalDelete(false);
    };
    const onDeleteOk = id => {
        const transactionToDelete = filteredTransactions.find(
            item => item.id === id,
        );
        dispatch(
            transactionsOperations.deleteTransactionOperation(
                transactionToDelete,
            ),
        );
        setTransactionId('');
        toggleModal();
    };

    return (
        <>
            {modalDelete && (
                <Modal
                    // handleClickRight={onDeleteCancel}
                    // handleClickLeft={onDeleteOk(transactionI)}
                    onClose={onDeleteCancel}
                >
                    <button className={st.close} onClick={toggleModal}>
                        <svg width="12" height="12">
                            <use href={`${sprite}#icon-close`}></use>
                        </svg>
                    </button>
                    <p className={st.modalTxt}>Вы уверены?</p>
                    <div className={st.modalBtns}>
                        <Button
                            type="button"
                            onClick={onDeleteOk(transactionId)}
                            text={'да'}
                        />
                        <Button
                            type="button"
                            onClick={onDeleteCancel}
                            text={'нет'}
                        />
                    </div>{' '}
                </Modal>
            )}

            <Media
                query="(min-width: 768px)"
                render={() => (
                    <div className={s.tableWrapper}>
                        <table className={s.transactionTable}>
                            <thead className={s.thead}>
                                <tr>
                                    <th className={`${s.name} ${s.date}`}>
                                        Дата
                                    </th>
                                    <th
                                        className={`${s.name} ${s.description}`}
                                    >
                                        Описание
                                    </th>
                                    <th className={`${s.name} ${s.category}`}>
                                        Категория
                                    </th>
                                    <th className={`${s.name} ${s.sum}`}>
                                        Сумма
                                    </th>
                                    <th className={`${s.name} ${s.icon}`}></th>
                                </tr>
                            </thead>

                            <tbody className={s.tbody}>
                                {filteredTransactions.map(
                                    ({
                                        date,
                                        subCategory,
                                        category,
                                        sum,
                                        id,
                                    }) => (
                                        <tr key={id} className={s.tableRow}>
                                            <td className={s.date}>{date}</td>
                                            <td className={s.description}>
                                                {subCategory}
                                            </td>
                                            <td className={s.category}>
                                                {category}
                                            </td>
                                            <td className={s.sum}>{sum}</td>
                                            <td className={s.icon}>
                                                <button
                                                    type="button"
                                                    className={s.button}
                                                    onClick={() =>
                                                        handleDeleteClick(id)
                                                    }
                                                >
                                                    <svg
                                                        width="18"
                                                        height="18"
                                                        className={s.basket}
                                                    >
                                                        <use
                                                            href={`${spriteGlobal}#icon-delete`}
                                                        ></use>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ),
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            />
        </>
    );
}
