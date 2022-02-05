import BackgroundHome from 'components/BackgroundHome/BackgroundHome';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
import RegisterForm from 'components/RegisterForm';
const HomePage = () => {
    return (
        <>
            <Header />
            <AuthHeader />
            <BackgroundHome />
            <RegisterForm />
        </>
    );
};
export default HomePage;
