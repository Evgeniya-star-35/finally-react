import { useState } from 'react';
import optionsCosts from '../../data/costsCategories.json';
import optionsIncomes from '../../data/incomesCategories.json';
import arrowSprite from '../../images/globalIcons/symbol-defs.svg';

import s from './Dropdown.module.css';

export default function Dropdown({
    category,
    setCategory,
    type,
    changeSelect,
}) {
    const [isActive, setIsActive] = useState(false);

    const options = type === 'cost' ? optionsCosts : optionsIncomes;
    return (
        <div className={s.dropdown}>
            <div
                tabIndex="0"
                className={s.mainOption}
                onClick={() => setIsActive(!isActive)}
            >
                {!category && type === 'cost'
                    ? 'Категория товара'
                    : !category && type === 'incomes'
                    ? 'Категория дохода'
                    : category}
                {!isActive ? (
                    <svg width="15" height="5" className={s.dropdownIcon}>
                        <use href={`${arrowSprite}#icon-arrow-up`}></use>
                    </svg>
                ) : (
                    <svg width="15" height="5" className={s.dropdownIcon}>
                        <use href={`${arrowSprite}#icon-arrow-down`}></use>
                    </svg>
                )}
            </div>
            {isActive && (
                <div className={s.optionsList}>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setCategory(option);
                                setIsActive(false);
                            }}
                            className={s.choosenOption}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
