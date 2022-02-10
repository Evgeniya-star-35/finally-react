import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Media from 'react-media';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import Button from 'components/Buttons/Button';
import GoBackArrow from '../GoBack';
import Dropdown from '../Dropdown';
import CalendarForm from 'components/CalendarForm/CalendarForm';

import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionForm.module.css';

export default function TransactionForm({
    date,
    type,
    setType,
    handleCalendarClick,
    closePicker,
    picker,
}) {
    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');

    const [sum, setSum] = useState('');
    const dispatch = useDispatch();

    const setTypePlaceholder = () => {
        if (type === 'costs') {
            setType('Описание товара');
        }
        if (type === 'incomes') {
            setType('Описание дохода');
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'product':
                setProduct(value);
                break;
            case 'category':
                setCategory(value);
                break;
            case 'sum':
                setSum(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        const transaction = {
            type: type,
            date,
            category,
            product,
            sum,
        };
        dispatch(transactionsOperations.addTransactionOperation(transaction));
        reset();
    };

    const reset = e => {
        setProduct('');
        setSum('');
        setCategory('');
    };

    return (
        <>
            <GoBackArrow />

            <form className={s.transactionForm} onSubmit={handleSubmit}>
                <div className={s.inputsWrapper}>
                    <CalendarForm
                        date={date}
                        handleCalendarClick={handleCalendarClick}
                        closePicker={closePicker}
                        picker={picker}
                    />
                    <label>
                        <input
                            name="product"
                            value={product}
                            type="text"
                            placeholder={
                                type === 'costs'
                                    ? 'Описание товара'
                                    : 'Описание дохода'
                            }
                            required
                            className={s.productInput}
                            onChange={handleChange}
                        />
                    </label>
                    <Dropdown
                        type={type}
                        category={category}
                        setCategory={setCategory}
                    />

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
                        <Media
                            query="(max-width: 767.98px)"
                            render={() => (
                                <button className={s.calcBtn}>
                                    <svg
                                        width="20"
                                        height="20"
                                        className={s.calcSvg}
                                    >
                                        <use
                                            href={`${sprite}#icon-calculator`}
                                        ></use>
                                    </svg>
                                </button>
                            )}
                        />
                        <Media
                            query="(min-width: 768px)"
                            render={() => (
                                <svg
                                    width="20"
                                    height="20"
                                    className={s.calcSvg}
                                >
                                    <use
                                        href={`${sprite}#icon-calculator`}
                                    ></use>
                                </svg>
                            )}
                        />
                    </div>
                </div>
                <div className={s.wrapBtns}>
                    <Button text="ввод" />
                    <Button text="очистить" type="button" onClick={reset} />
                </div>
            </form>
        </>
    );
}
