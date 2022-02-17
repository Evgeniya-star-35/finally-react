import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Background from 'components/Background/Background';
import AuthHeader from '../../components/Header/AuthHeader';
import Container from 'components/Container/Container';
import TransactionForm from 'components/TransactionForm';

const TransactionPage = () => {
    const [type, setType] = useState(null);
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const { transactionsType } = useParams();

    useEffect(() => {
        setType(transactionsType);
    }, [transactionsType]);

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
                <TransactionForm date={date} type={type} />
            </Container>
        </>
    );
};
export default TransactionPage;
