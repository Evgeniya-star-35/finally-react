import { useState, useEffect } from 'react';
import Media from 'react-media';
import AuthHeader from '../../components/Header/AuthHeader';
import Balance from 'components/Balance/Balance';
import Container from '../../components/Container';
import CostsButton from 'components/Buttons/CostsAndIncomesButtons/CostsButton';
import IncomesButton from 'components/Buttons/CostsAndIncomesButtons/IncomesButton';
import GoToReports from 'components/GoToReports';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import Summary from 'components/Summary';
import s from './MainPage.module.css';
import TransactionForm from 'components/TransactionForm';
import TransactionList from 'components/TransactionListMobile/TransactionList';

const MainPage = () => {
    const [type, setType] = useState('incomes');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [picker, setPicker] = useState(false);
    const [listRender, setListRender] = useState(true);

    useEffect(() => {
        setDate(startDate);
        setYear(startDate.split('.')[2]);
        /* eslint-disable-next-line */
    }, []);

    // const getTransactionType = e => {
    //     console.log(e.currentTarget.title);
    // };
    const typeToggle = e => {
        setType(`${e.currentTarget.title}`);
        console.log(e.currentTarget.title);
    };
    const setNewDate = date => {
        setDate(date);
        setYear(date.split('.')[2]);
    };
    // const handleCalendarClick = () => {
    //     setPicker(true);
    // };
    // const closePicker = dateNew => {
    //     const newDate = `${dateNew.getUTCDate()}.${
    //         dateNew.getUTCMonth() + 1
    //     }.${dateNew.getUTCFullYear()}`;

    //     setDate(newDate);
    //     setYear(newDate.split('.')[2]);
    //     setPicker(false);
    // };

    // const onArrow = e => {
    //     typeToggle(e);
    //     return listRender ? setListRender(false) : setListRender(true);
    // };
    // const onBack = () => {
    //     setListRender(true);
    // };

    const day = new Date();

    const startDate = `${day.getDate()}.${
        day.getMonth() + 1
    }.${day.getFullYear()}`;

    return (
        <>
            <AuthHeader />
            <Container>
                <div className={s.balanceTabletWrapper}>
                    <GoToReports />
                    <Balance />
                </div>
                <Media
                    query="(max-width: 767.98px)"
                    render={() => (
                        <>
                            <div className={s.btnMobileWrapper}>
                                <CostsButton onClick={typeToggle} />
                                <IncomesButton onClick={typeToggle} />
                            </div>
                            {/* <TransactionList
                                transactionType={type}
                                date={date}
                            /> */}
                        </>
                    )}
                />
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <>
                            <div className={s.btnTabletWrapper}>
                                <CostsButton getType={typeToggle} />
                                <IncomesButton getType={typeToggle} />
                            </div>
                            <div className={s.transactionTabletDesktopWrapper}>
                                <TransactionForm
                                    transactionType={type}
                                    setType={setType}
                                    date={date}
                                    currentDate={setNewDate}
                                />
                                <div className={s.transactionSummaryWrapper}>
                                    <TransactionTable />

                                    <Summary year={year} />
                                </div>
                            </div>
                        </>
                    )}
                />
            </Container>
        </>
    );
};
export default MainPage;
