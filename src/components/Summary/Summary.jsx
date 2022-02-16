import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/currentMonth.json';
import s from './Summary.module.css';

export default function Summary({ year, month }) {
    const dispatch = useDispatch();
    const totalBalance = 0;

    useEffect(() => {
        dispatch(transactionsOperations.getMonthlyBalancesForSummary(year)); //забрала у пропсів month
    }, [totalBalance]);

    const monthsBalance = useSelector(getTransactionsMonth);

    return (
        <>
            <div className={s.summaryWrap}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    {monthsBalance?.length > 0 &&
                        monthsBalance.map(({ month, value }, id) => (
                            <li key={id} className={s.item}>
                                <p className={s.month}>
                                    {
                                        arrOfMonths.find(
                                            monthData => monthData.id === month,
                                        ).name
                                    }
                                </p>
                                <p className={s.sum}>{value}</p>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
