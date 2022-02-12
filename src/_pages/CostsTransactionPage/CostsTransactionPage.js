import { useState, useEffect } from 'react';
import Background from '../../components/Background/Background';
import AuthHeader from '../../components/Header/AuthHeader';
import Container from '../../components/Container/Container';
import TransactionForm from '../../components/TransactionForm';

const CostsTransactionPage = (category, setCategory) => {
    const [type, setType] = useState('cost');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
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
    return (
        <>
            <Background />
            <AuthHeader />
            <Container>
                <TransactionForm
                    date={date}
                    type={type}
                    category={category}
                    setCategory={setCategory}
                />
            </Container>
        </>
    );
};
export default CostsTransactionPage;
