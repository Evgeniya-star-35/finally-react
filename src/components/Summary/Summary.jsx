import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getMonthlyBalances } from '../../redux/transactions/transactions-selectors';
import transactionsOperations from 'redux/transactions/transactions-operations';
import arrOfMonths from '../../data/month.json';
import s from './Summary.module.css';

export default function Summary({ year }) {
    const dispatch = useDispatch();
    // const balance = useSelector(getTotalBalance);
    const monthsBalance = useSelector(getMonthlyBalances);
    const sortBalance = [...monthsBalance].sort((a, b) => b.month - a.month);
    useEffect(() => {
        if (year > 0) {
            dispatch(transactionsOperations.getMonthlyBalancesYear(year));
        }
    }, [dispatch, year]);
    return (
        <>
            <div className={s.summaryWrap}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    {sortBalance.map(({ month, sum }, id) => (
                        <li key={id} className={s.item}>
                            <p className={s.month}>
                                {arrOfMonths.find(el => el.id === month).name}
                            </p>
                            <p className={s.sum}>
                                {sum}
                                {/* {month.amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ')}{' '} */}
                            </p>
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
