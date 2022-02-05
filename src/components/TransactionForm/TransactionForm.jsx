import { useState } from 'react';
import Button from 'components/Buttons/Button';
import GoBackArrow from '../GoBack';
import optionsCosts from '../../data/costsCategories.json';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionForm.module.css';

export default function TransactionForm() {
    const [product, setProduct] = useState('');
    const [sum, setSum] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'product':
                return setProduct(value);

            case 'sum':
                return setSum(value);

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
    };
    const reset = e => {
        setProduct('');
        setSum('');
    };

    return (
        <>
            <GoBackArrow />

            <form className={s.transactionForm}>
                <div className={s.inputsWrapper}>
                    <label>
                        <input
                            name="product"
                            value={product}
                            type="text"
                            placeholder="Описание товара"
                            required
                            className={s.productInput}
                            onChange={handleChange}
                        />
                    </label>
                    <select className={s.selectCategory}>
                        <option value="Категория товара">
                            Категория товара
                        </option>
                        <option>Транспорт</option>
                        <option>Продукты</option>
                        <option>Здоровье</option>
                        <option>Алкоголь</option>
                        <option>Развлечения</option>
                        <option>Всё для дома</option>
                        <option>Техника</option>
                        <option>Коммуналка, связь</option>
                        <option>Образование</option>
                        <option>Спорт, хобби</option>
                        <option>Прочее</option>
                    </select>
                    <div className={s.sumWrapper}>
                        <label>
                            <input
                                name="sum"
                                value={sum}
                                type="text"
                                placeholder="00.00"
                                required
                                className={s.sumInput}
                                onChange={handleChange}
                            />
                        </label>
                        <button type="button" className={s.calcBtn}>
                            <svg width="20" height="20">
                                <use href={`${sprite}#icon-calculator`}></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={s.wrapBtns}>
                    <Button text="ввод" type="submit" onClick={handleSubmit} />
                    <Button text="очистить" type="button" onClick={reset} />
                </div>
            </form>
        </>
    );
}
