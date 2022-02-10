import Header from 'components/Header/Header';
import BackgroundHome from '../../components/BackgroundHome';
import RegisterForm from 'components/RegisterForm';
import Title from 'components/Title';
import Container from 'components/Container';
// import Balance from 'components/Balance';
// import TransactionForm from 'components/TransactionForm';


const HomePage = () => {
    return (
        <>

            <Header />
            <BackgroundHome />
            <Title />
            <RegisterForm />
        </>
    );
};

export default HomePage;
