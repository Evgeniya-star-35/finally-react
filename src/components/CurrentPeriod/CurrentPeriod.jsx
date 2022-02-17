import React from 'react';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import month from '../../data/month.json';
import s from './CurrentPeriod.module.css';

const CurrentPeriod = ({
    currentMonth,
    currentYear,
    onHandleClickRight,
    onHandleClickLeft,
}) => {
    const monthToString = String(currentMonth);
    const selectMonth = month.filter(el => el.id === monthToString);
    return (
        <div className={s.reviewMonth}>
            <h5 className={s.titleReviewMonth}>Текущий период:</h5>
            <div className={s.reviewMonthWrapper}>
                <ArrowBackIos
                    style={{
                        color: '#FF751D',
                        width: '12',
                        cursor: 'pointer',
                    }}
                    onClick={onHandleClickLeft}
                />

                <span className={s.reviewMonthTitle}>
                    {`${selectMonth[0].name} ${currentYear}`}
                </span>

                <ArrowForwardIos
                    style={{
                        color: '#FF751D',
                        width: '12',
                        cursor: 'pointer',
                    }}
                    onClick={onHandleClickRight}
                />
            </div>
        </div>
    );
};

export default CurrentPeriod;
