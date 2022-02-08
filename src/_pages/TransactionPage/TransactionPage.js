import Background from 'components/Background/Background';
import AuthHeader from '../../components/Header/AuthHeader';
// import TransactionTable from 'components/TransactionTable';
import Container from 'components/Container/Container';
import CalendarPicker from '../../components/CalendarPicker';
import TransactionForm from 'components/TransactionForm';

const TransactionPage = () => {
    return (
        <>
            {/* <Background /> */}
            <AuthHeader />
            <Container>
                {/* <CalendarPicker /> */}
                <TransactionForm />
            </Container>
        </>
    );
};
export default TransactionPage;
