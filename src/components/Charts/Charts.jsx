// import s from './CostsDiagram.module.css';

import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from 'recharts';
import { BG, CartsBg } from './Charts.styled';

const ChartCost = () => {
    const data = [
        { pv: 3, name: 'Продукты' },
        { pv: 4, name: 'Алкоголь' },
        { pv: 5, name: 'Развлечения' },
        { pv: 6, name: 'Здоровье' },
        { pv: 7, name: 'Транспорт' },
        // { pv: 8, name: 'Всё для дома' },
        // { pv: 9, name: 'Техника' },
        // { pv: 10, name: 'Коммуналка' },
        { pv: 11, name: 'Спорт' },
        // { pv: 12, name: 'Образование' },
        // { pv: 13, name: 'Прочее' },
    ];

    const renderCustomizedLabel = ({ x, y, width, value = 10 }) => {
        const radius = 10;
        return (
            <text
                x={x + width / 2}
                y={y - radius}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {`${value}грн.`}
            </text>
        );
    };

    return (
        <BG>
            <CartsBg>
                <BarChart
                    width={615}
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
