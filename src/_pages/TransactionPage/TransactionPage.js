import Background from 'components/Background/Background';
import AuthHeader from '../../components/Header/AuthHeader';
import Balance from 'components/Balance/Balance';
import TransactionTable from 'components/TransactionTable';
import Container from 'components/Container/Container';
import CalendarPicker from '../../components/CalendarPicker';

const TransactionPage = () => {
    return (
        <>
            {/* <Background /> */}
            <AuthHeader />
            <Container>
                <Balance />
                {/* <CalendarPicker /> */}
                <TransactionTable />
            </Container>
        </>
    );
};
export default TransactionPage;
