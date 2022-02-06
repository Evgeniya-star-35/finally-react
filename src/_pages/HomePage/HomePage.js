import BackgroundHome from 'components/BackgroundHome/BackgroundHome';

import Balance from 'components/Balance/Balance';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';

const HomePage = () => {
    return (
        <>
            <Header />
            <AuthHeader />
            <BackgroundHome>
                <Balance />
            </BackgroundHome>
        </>
    );
};
export default HomePage;
