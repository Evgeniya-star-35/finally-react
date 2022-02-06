import s from './Balance.module.css';
// витягнути з селектів редакс баланс.якщо баланс = 0,тоді модалка+кнопка,якщо ні то модалку не рендити,а тільки кнопку
const Balance = () => {
    return (
        <>
            <form className={s.Form}>
                <label for="balance">Баланс:</label>
                <input
                    id="balance"
                    type="text"
                    name="name"
                    maxLength="5"
                    placeholder="00.00"
                    autoComplete="off"
                />
                <button type="submit">Подтвердить</button>
            </form>
        </>
    );
};
export default Balance;
