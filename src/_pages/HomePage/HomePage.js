import Header from 'components/Header/Header';
import BackgroundHome from '../../components/BackgroundHome';
import RegisterForm from 'components/RegisterForm';
import Title from 'components/Title';
import Container from 'components/Container';
// import Balance from 'components/Balance';
// import TransactionForm from 'components/TransactionForm';
import Footer from 'components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { googleAuth } from 'redux/auth';

const HomePage = () => {
    const dispatch = useDispatch();

    const token = new URLSearchParams(document.location.search).get('token');
    if (token) {
        dispatch(googleAuth(token));
    }

    return (
        <>
            <Header />
            <BackgroundHome />
            <Title />
            <RegisterForm />
            <Footer />
        </>
    );
};

export default HomePage;
