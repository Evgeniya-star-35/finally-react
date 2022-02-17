import { useSelector } from 'react-redux';
import sprite from '../../images/reportIcons/symbol-defs.svg';
import { getTransactionsMonth } from '../../redux/transactions/transactions-selectors';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import s from './CategoriesReport.module.css';
import { useState } from 'react';
import ReportCostError from './ReportError';
import { BarChart, Bar, XAxis } from 'recharts';

// import { Bar } from 'react-chartjs-2';

import { BG, CartsBg } from './Charts.styled';
import useWindowDimensions from '../../hooks/useDemantions';

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

export default function CategoriesReport({ month, year }) {
    const [transactionsType, setTransactionsType] = useState('cost');
    const [category, setCategory] = useState('');

    const onHandleChangeTransactionsType = () => {
        if (transactionsType === 'cost') {
            setTransactionsType('incomes');
            setCategory('');
        }
        if (transactionsType === 'incomes') {
            setTransactionsType('cost');
            setCategory('');
        }
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

    //===============================================================================
    const { width } = useWindowDimensions();

    const filteredByType = transactions.filter(
        transaction => transaction.type === transactionsType,
    );

    const filteredByDate = filteredByType.filter(
        transaction =>
            transaction.month === String(month) &&
            transaction.year === String(year),
    );

    const findTotalSumForChart = data => {
        if (!!category) {
            return data
                .filter(transaction => transaction.category === category)
                .reduce((acc, elem) => {
                    const subCategory = acc.find(
                        item => item.subCategory === elem.subCategory,
                    );
                    if (!subCategory) {
                        acc.push({
                            subCategory: elem.subCategory,
                            sum: elem.sum,
                        });
                    } else {
                        subCategory.sum += elem.sum;
                    }
                    return acc;
                }, []);
        }

        const result = [];
        data.map(transaction => {
            const category = result.find(
                item => item.category === transaction.category,
            );
            if (!category) {
                return result.push({
                    category: transaction.category,
                    sum: transaction.sum,
                });
            } else {
                return (category.sum += transaction.sum);
            }
        });
        return result;
    };

    const sortedSubCategoryTransactions = [
        ...findTotalSumForChart(filteredByDate),
    ].sort((a, b) => b.sum - a.sum);

    const sortedLables = [...sortedSubCategoryTransactions].map(tr => {
        return tr.subCategory ? tr.subCategory : tr.category;
    });

    const sortedSum = [...sortedSubCategoryTransactions].map(data => data.sum);

    const labelName = transactionsType === 'cost' ? 'Расход' : 'Доход';

    const getNextColor = color => {
        const colors = ['#FF751D', '#FFDAC0', '#fcd7bd'];

        if (!color) {
            return colors[0];
        }

        const colorIdx = colors.findIndex(item => color === item);

        return colors[colorIdx + 1] ? colors[colorIdx + 1] : colors[0];
    };

    const colorsArray = array => {
        let prev = null;

        return sortedSum.map(item => {
            const currentColor = getNextColor(prev);

            prev = currentColor;

            return currentColor;
        });
    };

    const barWidth = width < 425 ? 15 : 38;

    const data = {
        labels: sortedLables,
        datasets: [
            {
                label: labelName,
                data: sortedSum,
                backgroundColor: colorsArray(sortedSum),
                borderColor: colorsArray(sortedSum),
                borderWidth: 1,
                borderRadius: 10,
                barThickness: barWidth,
                barMargin: 20,
            },
        ],
    };

    const optionsVertical = {
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const optionsHorizontal = {
        maintainAspectRatio: false,
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };
    const height = width < 425 ? 400 : 200;

    const options = width < 425 ? optionsHorizontal : optionsVertical;

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
            <div className={s.chartContainer}>
                <Bar
                    data={data}
                    height={height}
                    width={320}
                    options={options}
                />
            </div>
        </>
    );
}
