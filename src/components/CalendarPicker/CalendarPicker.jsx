import { useEffect, useState, useRef } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import useOnClickCalendar from 'hooks/useOnClickCalendar';
import s from './CalendarPicker.module.css';

export default function CalendarPicker({ startDate, closeHandler, align }) {
    const ref = useRef();
    const [selectedDay, setSelectedDay] = useState();
    const [close, setClose] = useState(false);

    useOnClickCalendar(ref, () => closeHandler(selectedDay));

    useEffect(() => {
        setSelectedDay(formatDate(startDate));
        if (close) {
            closeHandler(selectedDay);
        }
        /*eslint-disable-next-line*/
    }, [close, startDate]);

    const formatDate = date => {
        const splittedDate = date.split('.');
        return new Date(
            Number(splittedDate[2]),
            Number(splittedDate[1] - 1),
            Number(splittedDate[0]),
        );
    };

    const handleDayClick = day => {
        setSelectedDay(day);
        setClose(true);
    };

    const modifiers = {
        today: new Date(),
        selectedDay: selectedDay,
    };
    const modifiersStyles = {
        today: {
            color: 'var( --accent-color)',
            backgroundColor: 'white',
        },
        selectedDay: {
            color: 'white',
            backgroundColor: 'var( --accent-color)',
        },
    };

    return (
        <div className={`${s.pickerWrapper} ${align}`} ref={ref}>
            <DayPicker
                selectedDays={[selectedDay, modifiers.today]}
                onDayClick={handleDayClick}
                months={MONTHS}
                weekdaysLong={WEEKDAYS_LONG}
                weekdaysShort={WEEKDAYS_SHORT}
                firstDayOfWeek={1}
                locale="ru"
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                showOutsideDays
            />
        </div>
    );
}

const MONTHS = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
const WEEKDAYS_LONG = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
