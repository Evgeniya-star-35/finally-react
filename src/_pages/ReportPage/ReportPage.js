// import Background from 'components/Background/Background';
import Balance from 'components/Balance';
import CurrentPeriod from '../../components/CurrentPeriod';
import GoToMainButton from 'components/Buttons/GoToMainButton';
import CategoriesCosts from 'components/CategoriesCosts';
import CategoriesIncomes from 'components/CategoriesIncomes';
import GoBackArrow from 'components/GoBack/GoBack';
import Background from 'components/Background/Background';
import s from './ReportPage.module.css';

const ReportPage = () => {
    return (
        <>
            <Background />
            <GoBackArrow />
            <div className={s.balanceWrap}>
                <GoToMainButton />
                <CurrentPeriod />
                <Balance />
            </div>
            <CategoriesCosts />
            <CategoriesIncomes />
        </>
    );
};
export default ReportPage;
