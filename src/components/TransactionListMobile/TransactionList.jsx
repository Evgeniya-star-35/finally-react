import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { getTransactionsDay } from '../../redux/transactions/transactions-selectors';
import Modal from '../Modal/Modal';
import Button from '../Buttons/Button';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionList.module.css';
import st from '../Modal/Modal.module.css';

export default function TransactionList({ date }) {
    const dispatch = useDispatch();

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
        console.log(id);
        toggleModal();
        setTransactionId(id);
    };
    const onDeleteCancel = () => {
        setTransactionId('');
        setModalDelete(false);
    };
    const onDeleteOk = id => {
        const transactionToDelete = filteredTransactions.find(item => {
            console.log(item.id === id);
            return item.id === id;
        });
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
                    </div>
                </Modal>
            )}

            <ul className={s.listWrapper}>
                {filteredTransactions.map(
                    ({ date, subCategory, category, sum, id, type }) => (
                        <li className={s.listItem} key={id}>
                            <div className={s.detailsContainer}>
                                <div>
                                    <p className={s.product}>{subCategory}</p>
                                    <p className={s.date}>{date}</p>
                                </div>

                                <p className={s.category}>{category}</p>
                            </div>

                            <div className={s.sum_item}>
                                {type === 'cost' ? (
                                    <span className={s.cost}>
                                        - {sum.toFixed(2)} UAH
                                    </span>
                                ) : (
                                    <span className={s.incomes}>
                                        {sum.toFixed(2)} UAH
                                    </span>
                                )}

                                <div className={s.icon_button}>
                                    <button
                                        type="button"
                                        className={s.button}
                                        onClick={() => handleDeleteClick(id)}
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
                                </div>
                            </div>
                        </li>
                    ),
                )}
            </ul>
        </>
    );
}
