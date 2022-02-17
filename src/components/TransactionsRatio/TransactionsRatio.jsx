import { useSelector } from 'react-redux';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import s from './TransactionsRatio.module.css';

const TransactionsRatio = ({ currentMonth, currentYear }) => {
    const transactions = useSelector(getTransactionsMonth);

    const totalSum = type => {
        let total = 0;
        const filterByType = transactions.filter(
            transaction => transaction.type === type,
        );
        filterByType.map(elem => (total += elem.sum));
        return total.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    };

    return (
        <>
            <div className={s.ratio}>
                <div className={s.ratio_container}>
                    <div className={s.ratio_cost}>
                        <p className={s.ratio_title}>Расходы:</p>
                        <span className={s.ratio_costs_sum}>
                            {`- ${totalSum('cost')}`} UAH
                        </span>
                    </div>
                    <div className={s.ratio_line}></div>
                    <div className={s.ratio_incomes}>
                        <p className={s.ratio_title}>Доходы:</p>
                        <span className={s.ratio_incomes_sum}>
                            {`+ ${totalSum('incomes')}`} UAH
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionsRatio;
