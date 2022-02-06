import sprite from '../../images/incomeIcons/symbol-defs.svg';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import s from './CategoriesIncomes.module.css';

export default function CategoriesIncomes() {
    return (
        <div className={s.categoriesIncomes}>
            <div className={s.titleBox}>
                <button type="button" className={s.button}>
                    <svg width="5" height="10">
                        <use href={`${spriteGlobal}#icon-back`}></use>
                    </svg>
                </button>

                <h2 className={s.title}>Доходы</h2>

                <button type="button" className={s.button}>
                    <svg width="5" height="10">
                        <use href={`${spriteGlobal}#icon-forward`}></use>
                    </svg>
                </button>
            </div>

            <ul className={s.list}>
                <li className={s.item}>
                    <p className={s.income}>00.00</p>
                    <svg width="56" height="56" className={s.icon}>
                        <use href={`${sprite}#icon-salary`}></use>
                    </svg>
                    <p className={s.incomeName}>ЗП</p>
                </li>

                <li className={s.item}>
                    <p className={s.income}>00.00</p>
                    <svg width="56" height="56" className={s.icon}>
                        <use href={`${sprite}#icon-salary1`}></use>
                    </svg>
                    <p className={s.incomeName}>Доп. доход</p>
                </li>
            </ul>
        </div>
    );
}
