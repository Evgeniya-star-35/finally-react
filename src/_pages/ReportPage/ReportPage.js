import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Chart from 'components/Diagram';
import Balance from 'components/Balance';
import CurrentPeriod from '../../components/CurrentPeriod';
import GoToMainButton from 'components/Buttons/GoToMainButton';
import CategoriesReport from 'components/CategoriesReport';
import GoBackArrow from 'components/GoBack/GoBack';
import Background from 'components/Background/Background';
import TransactionsRatio from 'components/TransactionsRatio';
import transactionsOperations from 'redux/transactions/transactions-operations';
import AuthHeader from 'components/Header/AuthHeader';
import Diagram from 'components/Diagram';
import s from './ReportPage.module.css';

const ReportPage = () => {
    const dispatch = useDispatch();
    let date = new Date();
    let selectedMonth = date.getMonth() + 1;
    let selectedYear = date.getFullYear();
    const [month, setMonth] = useState(selectedMonth);
    const [year, setYear] = useState(selectedYear);
    const [category, setCategory] = useState('');
    const [transactionsType, setTransactionsType] = useState('cost');

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

    const onHandleChangeTransactionsType = () => {
        transactionsType === 'cost'
            ? setTransactionsType('incomes')
            : setTransactionsType('cost');
    };

    return (
        <>
            <AuthHeader />
            <Background />

            <GoBackArrow />
            <div className={s.balanceWrap}>
                <GoToMainButton />
                <CurrentPeriod
                    currentMonth={month}
                    currentYear={year}
                    onHandleClickRight={onHandleClickRight}
                    onHandleClickLeft={onHandleClickLeft}
                />

                <Balance />
            </div>

            <TransactionsRatio perMonth={month} perYear={year} />
            <CategoriesReport
                month={month}
                year={year}
                category={category}
                type={transactionsType}
            />
        </>
    );
};
export default ReportPage;
