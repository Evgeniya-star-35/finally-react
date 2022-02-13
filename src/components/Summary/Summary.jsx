import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/month.json';
import s from './Summary.module.css';

export default function Summary({ year, month }) {
    const dispatch = useDispatch();
    // const balance = useSelector(getTotalBalance);
    // const sortBalance = [...monthsBalance].sort((a, b) => b.month - a.month);
    // console.log(sortBalance);
    useEffect(() => {
        dispatch(transactionsOperations.getTransactionsMonthYear(month, year));
    }, [dispatch, month, year]);
    const monthsBalance = useSelector(getTransactionsMonth);

    console.log(monthsBalance);
    return (
        <>
            <div className={s.summaryWrap}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    {monthsBalance.map(({ month, sum }, id) => (
                        <li key={id} className={s.item}>
                            <p className={s.month}>{month}</p>
                            <p className={s.sum}>{sum}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

//   <li className={s.item}>
//                         <p className={s.month}>март</p>
//                         <p className={s.sum}>20000</p>
//                     </li>
//                     <li className={s.item}>
//                         <p className={s.month}>апрель</p>
//                         <p className={s.sum}>20000</p>
//                     </li>
//                     <li className={s.item}>
//                         <p className={s.month}>май</p>
//                         <p className={s.sum}>2000</p>
//                     </li>
//                     <li className={s.item}>
//                         <p className={s.month}>июнь</p>
//                         <p className={s.sum}>2000</p>
//                     </li>
//                     <li className={s.item}>
//                         <p className={s.month}>июль</p>
//                         <p className={s.sum}>2000</p>
//                     </li>
//                     <li className={s.item}>
//                         <p className={s.month}>август</p>
//                         <p className={s.sum}>2000</p>
//                     </li>
