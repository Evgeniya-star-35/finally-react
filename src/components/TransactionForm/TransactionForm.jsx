import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import transactionsOperations from '../../redux/transactions/transactions-operations';
import Button from 'components/Buttons/Button';
import GoBackArrow from '../GoBack';
import Dropdown from '../Dropdown';
import CalendarForm from 'components/CalendarForm/CalendarForm';
import Summary from 'components/Summary';
import TransactionTable from 'components/TransactionTable/TransactionTable';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import s from './TransactionForm.module.css';

export default function TransactionForm({
    date,
    type,
    handleCalendarClick,
    closePicker,
    picker,
    setNewDate,
    day,
    month,
    year,
}) {
    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');
    const [sum, setSum] = useState('');
    const dispatch = useDispatch();
    const balance = useSelector(state => state.auth.user.balance);

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
    const transaction = {
        type,
        date,
        category,
        subCategory: product,
        sum,
        day,
        month,
        year,
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (balance < transaction.sum && transaction.type === 'cost') {
            reset();
            return toast.info(
                'Недостаточно средств для осуществления данной транзакции',
                {
                    position: 'top-center',
                    autoClose: 2500,
                },
            );
        }
        dispatch(transactionsOperations.addTransactionOperation(transaction));
        reset();
    };

    const reset = () => {
        setProduct('');
        setSum('');
        setCategory('');
    };
    const navigate = useNavigate();

    return (
        <>
            <GoBackArrow />
            <form className={s.transactionForm} onSubmit={handleSubmit}>
                <div className={s.inputsWrapper}>
                    <Media
                        query="(min-width: 768px)"
                        render={() => (
                            <CalendarForm
                                date={date}
                                handleCalendarClick={handleCalendarClick}
                                closePicker={closePicker}
                                picker={picker}
                                setNewDate={setNewDate}
                            />
                        )}
                    />

                    <label htmlFor="product">
                        <input
                            name="product"
                            value={product}
                            type="text"
                            placeholder={
                                type === 'cost'
                                    ? 'Описание товара'
                                    : 'Описание дохода'
                            }
                            required
                            className={s.productInput}
                            onChange={handleChange}
                        />
                    </label>
                    <div>
                        <Dropdown
                            type={type}
                            category={category}
                            setCategory={setCategory}
                        />
                    </div>
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
                <Media
                    query="(min-width: 768px)"
                    render={() => (
                        <div className={s.wrapBtns}>
                            <Button text="ввод" />
                            <Button
                                text="очистить"
                                type="button"
                                onClick={reset}
                            />
                        </div>
                    )}
                />
            </form>
            <Media
                query="(max-width: 767.98px)"
                render={() => (
                    <div className={s.wrapBtns}>
                        <Button text="ввод" onClick={() => navigate(-1)} />
                        <Button text="очистить" type="button" onClick={reset} />
                    </div>
                )}
            />
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <>
                        <div className={s.transactionSummaryWrapper}>
                            <TransactionTable
                                transaction={transaction}
                                date={date}
                                subCategory={product}
                                sum={sum}
                                category={category}
                                setNewDate={setNewDate}
                            />

                            <Summary year={year} month={month} />
                        </div>
                    </>
                )}
            />
        </>
    );
}
