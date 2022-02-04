import React from 'react';
import s from './CurrentPeriod.module.css';

import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';

import month from '../../data/month.json';

const CurrentPeriod = ({
    currentMonth,
    currentYear,
    onHandleClickRight,
    onHandleClickLeft,
}) => {
    const monthToSytring = String(currentMonth);
    const selectMonth = month.filter(el => el.id === monthToSytring);
    return (
        <div classNamme={s.reviewMonth}>
            <h5 className={s.titleReviewMonth}>Current Period:</h5>
            <div className={s.reviewMonthWrapper}>
                <ArrowBackIos
                    className={s.ArrowBackIos}
                    onClick={onHandleClickLeft}
                />

                <span className={s.reviewMonthTitle}>
                    {`${selectMonth[0].name} ${currentYear}`}
                </span>

                <ArrowForwardIos
                    className={s.ArrowForwardIos}
                    onClick={onHandleClickRight}
                />
            </div>
        </div>
    );
};

export default CurrentPeriod;
