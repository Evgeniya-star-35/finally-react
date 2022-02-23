import { useSelector } from 'react-redux';
import sprite from '../../images/reportIcons/symbol-defs.svg';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import s from './CategoriesReport.module.css';
import { useState } from 'react';
import ReportCostError from './ReportError';
import Diagram from 'components/Diagram/Diagram';

const incomesCategories = [
    { id: '1', category: 'Заработная плата', icon: 'salary' },
    { id: '2', category: 'Доп.доход', icon: 'extraIncome' },
];
const costsCategories = [
    { id: '3', category: 'Продукты', icon: 'food' },
    { id: '4', category: 'Алкоголь', icon: 'cocktail' },
    { id: '5', category: 'Развлечения', icon: 'kite' },
    { id: '6', category: 'Здоровье', icon: 'health' },
    { id: '7', category: 'Транспорт', icon: 'car' },
    { id: '8', category: 'Всё для дома', icon: 'couch' },
    { id: '9', category: 'Техника', icon: 'tools' },
    { id: '10', category: 'Коммуналка, связь', icon: 'group' },
    { id: '11', category: 'Спорт, хобби', icon: 'clay' },
    { id: '12', category: 'Образование', icon: 'book' },
    { id: '13', category: 'Прочее', icon: 'ufo' },
];

export default function CategoriesReport({ month, year, category }) {
    const [transactionsType, setTransactionsType] = useState('cost');

    const onHandleChangeTransactionsType = () => {
        transactionsType === 'cost'
            ? setTransactionsType('incomes')
            : setTransactionsType('cost');
    };

    const transactions = useSelector(getTransactionsMonth);

    const transactionsByType = transactionsType => {
        const filterByType = transactions.filter(
            transaction => transaction.type === transactionsType,
        );
        return filterByType;
    };

    const transactionTotalSum = (transactionsType, category) => {
        let total = 0;
        transactionsByType(transactionsType)
            .filter(transaction => transaction.category === category)
            .map(elem => (total += elem.sum));
        return total;
    };

    const categories =
        transactionsType === 'cost' ? costsCategories : incomesCategories;

    return (
        <>
            <div className={s.categoriesCosts}>
                <div className={s.titleBox}>
                    <button
                        type="button"
                        className={s.button}
                        onClick={onHandleChangeTransactionsType}
                    >
                        <svg width="10" height="10">
                            <use href={`${spriteGlobal}#icon-back`}></use>
                        </svg>
                    </button>

                    {transactionsType === 'cost' ? (
                        <h2 className={s.title}>Расходы</h2>
                    ) : (
                        <h2 className={s.title}>Доходы</h2>
                    )}

                    <button
                        type="button"
                        className={s.button}
                        onClick={onHandleChangeTransactionsType}
                    >
                        <svg width="10" height="10">
                            <use href={`${spriteGlobal}#icon-forward`}></use>
                        </svg>
                    </button>
                </div>

                {transactions.length === 0 && <ReportCostError />}
                {transactions.length > 0 && (
                    <ul className={s.list}>
                        {categories.map(category => {
                            let sum = transactionTotalSum(
                                transactionsType,
                                category.category,
                            );
                            if (sum === 0) {
                                return null;
                            }
                            return (
                                <li key={category.id} className={s.item}>
                                    <p className={s.cost}>
                                        {sum
                                            .toFixed(2)
                                            .replace(
                                                /(\d)(?=(\d\d\d)+([^\d]|$))/g,
                                                '$1 ',
                                            )}{' '}
                                        UAH
                                    </p>
                                    <svg
                                        width="56"
                                        height="56"
                                        className={s.icon}
                                    >
                                        <use
                                            href={`${sprite}#icon-${category.icon}`}
                                        ></use>
                                    </svg>
                                    <p className={s.costName}>
                                        {category.category}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
            <Diagram
                month={month}
                year={year}
                category={category}
                type={transactionsType}
            />
        </>
    );
}
