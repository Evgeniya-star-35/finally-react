import s from './TransactionsRatio.module.css';

function TransactionsRatio() {
    return (
        <>
            <div className={s.ratio}>
                <div className={s.ratio_container}>
                    <div className={s.ratio_cost}>
                        <p className={s.ratio_title}>Расходы:</p>
                        <span className={s.ratio_costs_sum}>
                            - 18 000.00 грн.
                        </span>
                    </div>
                    <div className={s.ratio_line}></div>
                    <div className={s.ratio_incomes}>
                        <p className={s.ratio_title}>Доходы:</p>
                        <span className={s.ratio_incomes_sum}>
                            + 45 000.00 грн.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransactionsRatio;
