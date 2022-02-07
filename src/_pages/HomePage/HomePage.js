import RegisterForm from 'components/RegisterForm';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import TransactionForm from 'components/TransactionForm';
import Summary from 'components/Summary';
const HomePage = () => {
    return (
        <>
            <RegisterForm />
            <Summary />
            <CategoriesCosts />
            <CategoriesIncomes />
            <TransactionForm />
        </>
    );
};
export default HomePage;
