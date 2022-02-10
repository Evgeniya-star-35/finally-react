import sprite from '../../images/costsIcons/symbol-defs.svg';
import spriteGlobal from '../../images/globalIcons/symbol-defs.svg';
import s from './CategoriesCosts.module.css';
import CategoriesIncomes from '../CategoriesIncomes';

export default function CategoriesCosts({ transactionsType, onClick }) {
    return (
        <div className={s.categoriesCosts}>
            <div className={s.titleBox}>
                <button type="button" className={s.button} onClick={onClick}>
                    <svg width="10" height="10">
                        <use href={`${spriteGlobal}#icon-back`}></use>
                    </svg>
                </button>

                {transactionsType === 'costs' ? (
                    <h2 className={s.title}>Расходы</h2>
                ) : (
                    <h2 className={s.title}>Доходы</h2>
                )}

                <button type="button" className={s.button} onClick={onClick}>
                    <svg width="10" height="10">
                        <use href={`${spriteGlobal}#icon-forward`}></use>
                    </svg>
                </button>
            </div>

            {transactionsType === 'costs' ? (
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-food`}></use>
                        </svg>
                        <p className={s.costName}>Продукты</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-cocktail`}></use>
                        </svg>
                        <p className={s.costName}>Алкоголь</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-kite`}></use>
                        </svg>
                        <p className={s.costName}>Развлечение</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use
                                href={`${sprite}#icon-hands-holding-heart`}
                            ></use>
                        </svg>
                        <p className={s.costName}>Здоровье</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-car`}></use>
                        </svg>
                        <p className={s.costName}>Транспорт</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-couch`}></use>
                        </svg>
                        <p className={s.costName}>все для дома</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-tools`}></use>
                        </svg>
                        <p className={s.costName}>техника</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-group`}></use>
                        </svg>
                        <p className={s.costName}>коммуналка, связь</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-clay`}></use>
                        </svg>
                        <p className={s.costName}>спорт, хобби</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-book`}></use>
                        </svg>
                        <p className={s.costName}>образование</p>
                    </li>

                    <li className={s.item}>
                        <p className={s.cost}>00.00</p>
                        <svg width="56" height="56" className={s.icon}>
                            <use href={`${sprite}#icon-ufo`}></use>
                        </svg>
                        <p className={s.costName}>прочее</p>
                    </li>
                </ul>
            ) : (
                <CategoriesIncomes />
            )}
        </div>
    );
}
