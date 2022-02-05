import BackgroundHome from 'components/BackgroundHome/BackgroundHome';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import TransactionForm from 'components/TransactionForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const HomePage = () => {
    return (
        <>
            <Header />
            <AuthHeader />
            <BackgroundHome />
            <RegisterForm />
            <TransactionForm />
        </>
    );
};
export default HomePage;
