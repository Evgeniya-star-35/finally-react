import React from 'react';
import { useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';
import useWindowDimensions from 'hooks/useDemantions';
import { getTransactionsMonth } from 'redux/transactions/transactions-selectors';
import s from './Diagram.module.css';

export default function Diagram({ month, year, category, type }) {
    const { width } = useWindowDimensions();

    const transactions = useSelector(getTransactionsMonth);

    const filteredByType = transactions.filter(
        transaction => transaction.type === type,
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
                .reduce((result, elem) => {
                    const subCategory = result.find(
                        item => item.subCategory === elem.subCategory,
                    );
                    if (!subCategory) {
                        result.push({
                            subCategory: elem.subCategory,
                            sum: elem.sum,
                        });
                    } else {
                        subCategory.sum += elem.sum;
                    }
                    return result;
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

    const sortedLabels = [...sortedSubCategoryTransactions].map(transaction => {
        return transaction.subCategory
            ? transaction.subCategory
            : transaction.category;
    });
    const sortedSum = [...sortedSubCategoryTransactions].map(data => data.sum);

    const labelName = type === 'cost' ? 'Расход' : 'Доход';

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

    const barWidth = width < 425 ? 15 : 40;

    const data = {
        labels: sortedLabels,
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
        <div className={s.chartContainer}>
            <Bar data={data} height={height} width={320} options={options} />
        </div>
    );
}
