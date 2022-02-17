// import s from './CostsDiagram.module.css';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    Cell,
    Text,
} from 'recharts';
import { getTransactionsMonth } from 'redux/transactions';
import { BG, CartsBg } from '../CategoriesReport/Charts.styled';
import costReports from '../../data/costReports.json';

const ChartCost = () => {
    const data = [
        { pv: 3, name: 'Продукты' },
        { pv: 4, name: 'Алкоголь' },
        { pv: 5, name: 'Развлечения' },
        { pv: 6, name: 'Здоровье' },
        { pv: 7, name: 'Транспорт' },
        { pv: 8, name: 'Всё для дома' },
        { pv: 9, name: 'Техника' },
        { pv: 10, name: 'Коммуналка' },
        { pv: 11, name: 'Спорт' },
        { pv: 12, name: 'Образование' },
        { pv: 13, name: 'Прочее' },
    ];

    const renderCustomizedLabel = props => {
        const { x, y, width, value = 10 } = props;
        const radius = 10;

        return (
            <text
                x={x + width / 2}
                y={y - radius}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={10}
            >
                {`${value}грн.`}
            </text>
        );
    };

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

    // const categories =
    //     transactionsType === 'cost' ? costsCategories : incomesCategories;

    return (
        <BG>
            <CartsBg>
                <BarChart
                    width={320}
                    height={330}
                    data={data}
                    margin={{
                        top: 50,
                        right: 15,
                        bottom: 9,
                        left: 15,
                    }}
                >
                    <XAxis dataKey="name" dy={2} />
                    <Bar
                        dataKey="pv"
                        fill="#fd8905"
                        minPointSize={5}
                        barSize={25}
                        radius={[10, 10, 0, 0]}
                        animationDuration={2000}
                    >
                        <LabelList
                            dataKey="10"
                            content={renderCustomizedLabel}
                        />
                        {/* <Bar dataKey="uv" fill="#82ca9d" minPointSize={10} /> */}
                    </Bar>
                </BarChart>
            </CartsBg>
        </BG>
    );
};

export default ChartCost;
