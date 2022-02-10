import Background from 'components/Background/Background';
import AuthHeader from '../../components/Header/AuthHeader';
// import TransactionTable from 'components/TransactionTable';
import Container from 'components/Container/Container';

import TransactionForm from 'components/TransactionForm';

const TransactionPage = () => {
    return (
        <>
            <Background />
            <AuthHeader />
            <Container>
                <TransactionForm />
            </Container>
        </>
    );
};
export default TransactionPage;
