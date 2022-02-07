// import RegisterForm from 'components/RegisterForm';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import TransactionForm from 'components/TransactionForm';

import Summary from 'components/Summary';
const HomePage = () => {
    return (
        <>
            <RegisterForm />
            <Summary />

import GoToReports from 'components/GoToReports';

const HomePage = () => {
    return (
        <>
            {/* <RegisterForm /> */}


            <CategoriesCosts />
            <CategoriesIncomes />


            <GoToReports />


            <TransactionForm />
        </>
    );
};
export default HomePage;
