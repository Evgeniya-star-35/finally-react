import s from './BalanceModal.module.css';

const BalanceModal = ({ onClick }) => {
    const onModalClick = e => {
        if (e.currentTarget === e.target) {
            onClick();
        }
    };

    return (
        <div className={s.Modal} onClick={onModalClick}>
            <h4 className={s.Text}>
                {' '}
                Привет! Для начала работы внеси текущий баланс своего счета!
            </h4>
            <p className={s.AddText}>
                Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
        </div>
    );
};
export default BalanceModal;
