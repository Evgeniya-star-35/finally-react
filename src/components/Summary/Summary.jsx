import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/month.json';
import { getTotalBalance } from '../../redux/auth/auth-selector';
import s from './Summary.module.css';

export default function Summary({ year, month }) {
    // console.log(year, month);
    const dispatch = useDispatch();
    const totalBalance = useSelector(getTotalBalance);
    // console.log(totalBalance);

    useEffect(() => {
        dispatch(transactionsOperations.getMonthlyBalancesForSummary(year)); //забрала у пропсів month
        // dispatch(transactionsOperations.getMonthlyBalancesYear(year))
    }, [totalBalance]);

    const monthsBalance = useSelector(getTransactionsMonth);

    // console.log(monthsBalance);
    // console.log(arrOfMonths);
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
