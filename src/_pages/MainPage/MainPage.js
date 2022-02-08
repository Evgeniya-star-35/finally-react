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

    const typeToggle = e => {
        setType(`${e.target.title}`);
    };

    const onArrow = e => {
        typeToggle(e);
        return listRender ? setListRender(false) : setListRender(true);
    };
    const onBack = () => {
        setListRender(true);
    };

    const day = new Date();

    const startDate = `${day.getDate()}.${
        day.getMonth() + 1
    }.${day.getFullYear()}`;

    return (
        <>
            <AuthHeader />
            <Container>
                <div>
                    <GoToReports />
                    <Balance />
                </div>
                <Media
                    query="(max-width: 767.98px)"
                    render={() => (
                        <>
                            <div className={s.btnMobileWrapper}>
                                <CostsButton onClick={onArrow} />
                                <IncomesButton onClick={onArrow} />
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
                                <CostsButton onClick={onArrow} />
                                <IncomesButton onClick={onArrow} />
                            </div>
                            <TransactionForm
                                type={type}
                                date={date}
                                currentDate={setNewDate}
                            />
                            <TransactionTable />
                            <Summary year={year} />
                        </>
                    )}
                />
            </Container>
        </>
    );
};
export default MainPage;
