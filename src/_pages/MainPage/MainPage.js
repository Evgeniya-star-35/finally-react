import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Media from 'react-media';
import { getCurrentUser } from 'redux/auth/auth-operations';
import AuthHeader from '../../components/Header/AuthHeader';
import Balance from 'components/Balance/Balance';
import Container from '../../components/Container';
import transactionsOperations from 'redux/transactions/transactions-operations';
import CostsButton from 'components/Buttons/CostsAndIncomesButtons/CostsButton';
import IncomesButton from 'components/Buttons/CostsAndIncomesButtons/IncomesButton';
import GoToReports from 'components/GoToReports';
import s from './MainPage.module.css';
import TransactionForm from 'components/TransactionForm';
import TransactionList from 'components/TransactionListMobile/TransactionList';

import Background from 'components/Background/Background';
import CalendarForm from 'components/CalendarForm/CalendarForm';
// import AvatarModal from '../../components/AvatarLoad';

const MainPage = () => {
    const [type, setType] = useState('incomes');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [picker, setPicker] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(transactionsOperations.getTransactionsDayOperation(date));
        dispatch(getCurrentUser());
    }, [date, dispatch]);
    const day = new Date();
    const startDate = `${day.getDate()}.${
        day.getMonth() + 1
    }.${day.getFullYear()}`;

    useEffect(() => {
        setDate(startDate);
        setMonth(startDate.split('.')[1]);
        setYear(startDate.split('.')[2]);
        /* eslint-disable-next-line */
    }, []);

    const setNewDate = date => {
        setDate(date);
        setMonth(startDate.split('.')[1]);
        setYear(date.split('.')[2]);
    };
    const handleCalendarClick = () => {
        setPicker(true);
    };
    const closePicker = dateNew => {
        const newDate = `${dateNew.getUTCDate()}.${
            dateNew.getUTCMonth() + 1
        }.${dateNew.getUTCFullYear()}`;
        setDate(newDate);
        setMonth(newDate.split('.')[1]);
        setYear(newDate.split('.')[2]);
        setPicker(false);
    };

    const setTypePlaceholder = () => {
        if (type === 'cost') {
            setType('Описание товара');
        }
        if (type === 'incomes') {
            setType('Описание дохода');
        }
    };
    const typeToggle = e => {
        setType(`${e.currentTarget.title}`);
    };

    return (
        <>
            <AuthHeader />
            <Background />
            <Container>
                <div className={s.balanceWrapper}>
                    <GoToReports />
                    <Balance />
                </div>
                <Media
                    query="(max-width: 767.98px)"
                    render={() => (
                        <>
                            <CalendarForm
                                date={date}
                                currentDate={setNewDate}
                                picker={picker}
                                closePicker={closePicker}
                                handleCalendarClick={handleCalendarClick}
                            />
                            <div className={s.btnMobileWrapper}>
                                <CostsButton getType={typeToggle} />
                                <IncomesButton getType={typeToggle} />
                            </div>
                            <TransactionList
                                transactionType={type}
                                date={date}
                            />
                        </>
                    )}
                />
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <>
                            <div className={s.btnTabletWrapper}>
                                <CostsButton getType={typeToggle} type={type} />
                                <IncomesButton
                                    getType={typeToggle}
                                    type={type}
                                />
                            </div>
                            <div className={s.transactionTabletDesktopWrapper}>
                                <TransactionForm
                                    type={type}
                                    setTypePlaceholder={setTypePlaceholder}
                                    date={date}
                                    currentDate={setNewDate}
                                    picker={picker}
                                    closePicker={closePicker}
                                    handleCalendarClick={handleCalendarClick}
                                    month={month}
                                    year={year}
                                />
                            </div>
                        </>
                    )}
                />

                {/* <AvatarModal /> */}
            </Container>
        </>
    );
};
export default MainPage;
