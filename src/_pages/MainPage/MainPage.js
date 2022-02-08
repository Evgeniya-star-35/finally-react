import AuthHeader from '../../components/Header/AuthHeader';
import Balance from 'components/Balance/Balance';
import Container from '../../components/Container';
const MainPage = () => {
    return (
        <>
            <AuthHeader />
            <Container>
                <Balance />
            </Container>
        </>
    );
};
export default MainPage;
