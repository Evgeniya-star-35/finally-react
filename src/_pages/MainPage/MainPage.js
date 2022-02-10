import { useState, useEffect } from 'react';
import Media from 'react-media';
import AuthHeader from '../../components/Header/AuthHeader';
import Balance from 'components/Balance/Balance';
import Container from '../../components/Container';
import CostsButton from 'components/Buttons/CostsAndIncomesButtons/CostsButton';
import IncomesButton from 'components/Buttons/CostsAndIncomesButtons/IncomesButton';
import GoToReports from 'components/GoToReports';
import Summary from 'components/Summary';
import s from './MainPage.module.css';
import TransactionForm from 'components/TransactionForm';
import TransactionList from 'components/TransactionListMobile/TransactionList';

import Background from 'components/Background/Background';
import CalendarForm from 'components/CalendarForm/CalendarForm';

const MainPage = () => {
    const [type, setType] = useState('incomes');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [picker, setPicker] = useState(false);
    const [listRender, setListRender] = useState(true);

    const day = new Date();

    const startDate = `${day.getDate()}.${
        day.getMonth() + 1
    }.${day.getFullYear()}`;

    useEffect(() => {
        setDate(startDate);
        setYear(startDate.split('.')[2]);
        /* eslint-disable-next-line */
    }, []);

    const setNewDate = date => {
        setDate(date);
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

    // const onArrow = e => {
    //     console.log(first);
    //     typeToggle(e);
    //     return listRender ? setListRender(false) : setListRender(true);
    // };
    // const onBack = () => {
    //     setListRender(true);
    // };

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
                                    type={type}
                                    setTypePlaceholder={setTypePlaceholder}
                                    date={date}
                                    currentDate={setNewDate}
                                    picker={picker}
                                    closePicker={closePicker}
                                    handleCalendarClick={handleCalendarClick}
                                />
                                <div className={s.transactionSummaryWrapper}>
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
