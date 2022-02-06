
import BackgroundHome from 'components/BackgroundHome/BackgroundHome';
import AuthHeader from 'components/Header/AuthHeader';
import Header from 'components/Header/Header';
import RegisterForm from 'components/RegisterForm';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import TransactionForm from 'components/TransactionForm';




const HomePage = () => {
    return (
        <>
            <RegisterForm />

            <CategoriesCosts />
            <CategoriesIncomes />

            <TransactionForm />

        </>
    );
};
export default HomePage;
