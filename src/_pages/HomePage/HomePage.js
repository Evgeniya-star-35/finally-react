
// import BackgroundHome from 'components/BackgroundHome/BackgroundHome';


import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
import RegisterForm from 'components/RegisterForm/RegisterForm';

import TransactionForm from 'components/TransactionForm';

const HomePage = () => {
    return (
        <>

            {/* <BackgroundHome /> */}

            <Header />
            <AuthHeader />
          
            <RegisterForm />

            <TransactionForm />
        </>
    );
};
export default HomePage;
