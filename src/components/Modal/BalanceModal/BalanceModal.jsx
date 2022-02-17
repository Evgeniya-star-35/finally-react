import s from './BalanceModal.module.css';

const BalanceModal = ({ onClick }) => {
    setTimeout(function () {
        onClick();
    }, 3000);

    return <div className={s.Modal}></div>;
};
export default BalanceModal;
