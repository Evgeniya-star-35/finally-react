import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import transactionsOperations from 'redux/transactions/transactions-operations';
import { getTransactionsDay } from '../../redux/transactions/transactions-selectors';
import s from './TransactionTable.module.css';

export default function TransactionTable({
    type,
    date,
    setNewDate,
    sum,
    category,
    subCategory,
}) {
    const [transaction, setTransaction] = useState('');
    const [modalDelete, setModalDelete] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);

    const dispatch = useDispatch();

    const transactions = useSelector(getTransactionsDay);
    // console.log(transactions);
    const filteredTransactions = transactions.filter(
        item => item.type === type,
    );
    console.log(filteredTransactions);

    // useEffect(() => {
    //     dispatch(transactionsOperations.setBalanceOperation());
    //     dispatch(transactionsOperations.getTransactionsDayOperation(date));
    // }, []);

    useEffect(() => {

        if (date) {
            dispatch(transactionsOperations.getTransactionsDayOperation(date));
        }
    }, [date, dispatch]);


       

    return (
        <>
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
                                {/* {items.map(({ id, date, description, category, sum }) => ( */}
                                <tr className={s.tableRow}>
                                    <td className={s.date}>{date}</td>
                                    <td className={s.description}>
                                        {subCategory}
                                    </td>
                                    <td className={s.category}>{category}</td>
                                    <td className={s.sum}>{sum}</td>
                                    <td className={s.icon}>
                                        <button
                                            type="button"
                                            className={s.button}
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

                                <tr className={s.tableRow}>
                                    <td className={s.date}>{date}</td>
                                    <td className={s.description}>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                    </td>
                                    <td className={s.category}>Продукты</td>
                                    <td className={s.sum}>- 1050.00 грн.</td>
                                    <td className={s.icon}>
                                        <button
                                            type="button"
                                            className={s.button}
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
                            </tbody>
                        </table>
                    </div>
                )}
            />
        </>
    );
}
