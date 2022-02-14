import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryStack,
} from 'victory';
import s from './CostsDiagram.module.css';
import Container from '../Container';
import { useSelector } from 'react-redux';
import { getTransactionsDay } from 'redux/transactions';

const costsCategories = [
    { id: '3', category: 'Продукты' },
    { id: '4', category: 'Алкоголь' },
    { id: '5', category: 'Развлечения' },
    { id: '6', category: 'Здоровье' },
    { id: '7', category: 'Транспорт' },
    { id: '8', category: 'Всё для дома' },
    { id: '9', category: 'Техника' },
    { id: '10', category: 'Коммуналка, связь' },
    { id: '11', category: 'Спорт, хобби' },
    { id: '12', category: 'Образование' },
    { id: '13', category: 'Прочее' },
];

const incomesCategories = [
    { id: '1', category: 'Заработная плата', icon: 'salary' },
    { id: '2', category: 'Доп.доход', icon: 'extraIncome' },
];

const data = [
    { id: 1, price: '' },
    { id: 2, price: '' },
    { id: 3, price: '' },
    { id: 4, price: '' },
    { id: 5, price: '' },
    { id: 6, price: '' },
    { id: 7, price: '' },
];

const CostDiagram = transactionsType => {
    // const transactions = useSelector(getTransactionsDay);

    // const categories =
    //     transactionsType === 'cost' ? costsCategories : incomesCategories;

    return (
        <Container>
            <div className={s.diagram}>
                <VictoryChart
                    className={s.chart}
                    theme={VictoryTheme.material}
                    domainPadding={25}
                    domain={{ y: [0, 1] }}
                    animate={{ duration: 1000 }}
                >
                    <VictoryAxis
                        style={{
                            tickLabels: { fontSize: 7, padding: 5 },
                        }}
                        tickValues={[1, 2, 3, 4, 5, 6, 7]}
                        tickFormat={[
                            'Мясо',
                            'Мясо',
                            'Мясо',
                            'Мясо',
                            'Алкоголь',
                        ]}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={x => `${x / 1}грн.`}
                        style={{
                            tickLabels: { fontSize: 7, padding: 5 },
                        }}
                    />
                    <VictoryStack>
                        <VictoryBar
                            labels={d => d.x.toFixed(0)}
                            cornerRadius={{
                                topLeft: 7,
                                topRight: 7,
                                bottomLeft: 5,
                                bottomRight: 5,
                            }}
                            data={data}
                            x="id"
                            y="price"
                            style={{
                                data: { width: 18 },
                            }}
                        />
                    </VictoryStack>
                </VictoryChart>
            </div>
        </Container>
    );
};

export default CostDiagram;
