import Header from 'components/Header/Header';
import BackgroundHome from '../../components/BackgroundHome';
import RegisterForm from 'components/RegisterForm';

const HomePage = () => {
    return (
        <>
            <div className=""></div>
            <BackgroundHome>
                <Header />
                <RegisterForm />
            </BackgroundHome>
        </>
    );
};

export default HomePage;
