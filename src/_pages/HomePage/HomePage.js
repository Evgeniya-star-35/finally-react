import BackgroundHome from 'components/BackgroundHome/BackgroundHome';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
import TransactionForm from 'components/TransactionForm';

const HomePage = () => {
    return (
        <>
            <Header />
            <AuthHeader />
            <BackgroundHome />
            <TransactionForm />
        </>
    );
};
export default HomePage;
