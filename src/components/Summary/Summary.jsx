import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    getTransactionsMonth,
    getMonthlyBalances,
} from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/month.json';
import s from './Summary.module.css';

export default function Summary({ year, month }) {
    const dispatch = useDispatch();
    const totalBalance = useSelector(state => state.auth.user.balance);

    useEffect(() => {
        dispatch(transactionsOperations.getMonthlyBalancesForSummary(year)); //забрала у пропсів month
    }, [dispatch, totalBalance, year]);

    // const monthsBalance = useSelector(getTransactionsMonth);
    const monthsBalance = useSelector(getMonthlyBalances);
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
                                <p className={s.sum}>
                                    {value
                                        .toFixed(2)
                                        .replace(
                                            /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                                            '$1 ',
                                        )}
                                </p>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
