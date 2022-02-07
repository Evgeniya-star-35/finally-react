import RegisterForm from 'components/RegisterForm';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import GoToReports from 'components/GoToReports';
import TransactionForm from 'components/TransactionForm';
import Summary from 'components/Summary';
const HomePage = () => {
    return (
        <>
            <RegisterForm />
            {/* <Summary />
            <CategoriesCosts />
            <CategoriesIncomes />

            <GoToReports /> */}

            <TransactionForm />
        </>
    );
};

export default HomePage;
