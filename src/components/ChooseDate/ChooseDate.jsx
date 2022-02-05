import s from './ChooseDate.module.css';
import sprite from '../../images/globalIcons/symbol-defs.svg';
import CalendarPicker from 'components/CalendarPicker';

export default function ChooseDate({
    date,
    handleCalendarClick,
    closePicker,
    picker,
    align,
}) {
    return (
        <div className={s.dateForm} onClick={handleCalendarClick}>
            <div className={s.calendarOverley}>
                <svg width="20" height="20">
                    <use href={`${sprite}#icon-calendar`}></use>
                </svg>
                {picker && (
                    <CalendarPicker
                        closeHandler={closePicker}
                        startDate={date}
                        align={align}
                    />
                )}
            </div>
            <p>{date}</p>
        </div>
    );
}
