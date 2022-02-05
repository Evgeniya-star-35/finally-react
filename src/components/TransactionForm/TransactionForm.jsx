import s from './TransactionForm.module.css';
import Button from 'components/Buttons/Button';
import { useState } from 'react';

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
            <form className={s.transactionForm}>
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

                <label>
                    <input
                        name="sum"
                        value={sum}
                        type="text"
                        placeholder="0.00"
                        required
                        className={s.productInput}
                        onChange={handleChange}
                    />
                </label>

                <Button text="ввод" type="submit" onClick={handleSubmit} />
                <Button text="очистить" type="button" onClick={reset} />
            </form>
        </>
    );
}
