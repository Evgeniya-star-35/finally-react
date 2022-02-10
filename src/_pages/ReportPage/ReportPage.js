// import Background from 'components/Background/Background';
import Balance from 'components/Balance';
import CurrentPeriod from '../../components/CurrentPeriod';
import GoToMainButton from 'components/Buttons/GoToMainButton';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import GoBackArrow from 'components/GoBack/GoBack';
import Background from 'components/Background/Background';
import TransactionsRatio from 'components/TransactionsRatio';
import s from './ReportPage.module.css';
// ======Petro, Vlad===========
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import transactionsOperations from 'redux/transactions/transactions-operations';
// ======Petro, Vlad===========

const ReportPage = () => {
    // ======Petro, Vlad===========

    const dispatch = useDispatch();
    let date = new Date();
    let selectedMonth = date.getMonth() + 1;
    let selectedYear = date.getFullYear();
    const [month, setMonth] = useState(selectedMonth);
    const [year, setYear] = useState(selectedYear);
    console.log(month, year);
    useEffect(() => {
        if ((month, year)) {
            dispatch(
                transactionsOperations.getTransactionsMonthYear(month, year),
            );
        }
    }, [dispatch, month, year]);

    const onHandleClickRight = () => {
        if (month < 12) {
            setMonth(prev => (prev += 1));
        } else {
            setMonth(1);
            setYear(prev => (prev += 1));
        }
    };
    const onHandleClickLeft = () => {
        if (month <= 1) {
            setMonth(12);
            setYear(prev => (prev -= 1));
        } else {
            setMonth(prev => (prev -= 1));
        }
    };
    // ======Petro, Vlad===========

    return (
        <>
            <Background />
            <GoBackArrow />
            <div className={s.balanceWrap}>
                <GoToMainButton />
                {/* // ======Petro, Vlad=========== */}
                <CurrentPeriod
                    currentMonth={month}
                    currentYear={year}
                    onHandleClickRight={onHandleClickRight}
                    onHandleClickLeft={onHandleClickLeft}
                />
                {/* // ======Petro, Vlad=========== */}
                <Balance />
            </div>
            <TransactionsRatio perMonth={month} perYear={year} />
            <CategoriesCosts />
            <CategoriesIncomes />
        </>
    );
};
export default ReportPage;
