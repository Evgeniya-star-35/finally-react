import Media from 'react-media';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionTable.module.css';

export default function TransactionTable() {
    return (
        <>
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <table className={s.transactionTable}>
                        <thead className={s.thead}>
                            <tr>
                                <th className={`${s.name} ${s.date}`}>Дата</th>
                                <th className={`${s.name} ${s.description}`}>
                                    Описание
                                </th>
                                <th className={`${s.name} ${s.category}`}>
                                    Категория
                                </th>
                                <th className={`${s.name} ${s.sum}`}>Сумма</th>
                                <th className={s.name}></th>
                            </tr>
                        </thead>

                        <tbody className={s.tbody}>
                            {/* {items.map(({ id, date, description, category, sum }) => ( */}
                            <tr className={s.tableRow}>
                                <td className={s.date}>05.09.2019</td>
                                <td className={s.description}>Бананы</td>
                                <td className={s.category}>Продукты</td>
                                <td className={s.sum}>- 50.00 грн.</td>
                                <td className={s.icon}>
                                    <button type="button" className={s.button}>
                                        <svg
                                            width="18"
                                            height="18"
                                            className={s.basket}
                                        >
                                            <use
                                                href={`${spriteGlobal}#icon-delete`}
                                            ></use>
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                            <tr className={s.tableRow}>
                                <td className={s.date}>05.09.2019</td>
                                <td className={s.description}>Бананы</td>
                                <td className={s.category}>Продукты</td>
                                <td className={s.sum}>- 50.00 грн.</td>
                                <td className={s.icon}>
                                    <button type="button" className={s.button}>
                                        <svg
                                            width="18"
                                            height="18"
                                            className={s.basket}
                                        >
                                            <use
                                                href={`${spriteGlobal}#icon-delete`}
                                            ></use>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            {/* ))} */}
                        </tbody>
                    </table>
                )}
            />
        </>
    );
}
