import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/month.json';
import s from './Summary.module.css';

export default function Summary({ year, month }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }, []);
    const monthsBalance = useSelector(getTransactionsMonth);

    // console.log(monthsBalance);
    // console.log(arrOfMonths);
    return (
        <>
            <div className={s.summaryWrap}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    {monthsBalance?.length > 0 &&
                        monthsBalance.map(({ month, sum }, id) => {
                            console.log(monthsBalance);
                            return (
                                <li key={id} className={s.item}>
                                    <p className={s.month}>{month}</p>
                                    <p className={s.sum}>{sum}</p>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </>
    );
}
