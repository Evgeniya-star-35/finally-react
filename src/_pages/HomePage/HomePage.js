import Header from 'components/Header/Header';
import BackgroundHome from '../../components/BackgroundHome';
import RegisterForm from 'components/RegisterForm';
// import TransactionForm from 'components/TransactionForm';

const HomePage = () => {
    return (
        <>
            <BackgroundHome>
                <Header />
                <RegisterForm />
                {/* <TransactionForm /> */}
            </BackgroundHome>
        </>
    );
};

export default HomePage;
