import s from './BalanceModal.module.css';

const BalanceModal = ({ onClick }) => {
    setTimeout(function () {
        onClick();
    }, 3000);
    // const closeModal = () =>{
    //     const id = setTimeout(function(){
    //         onClick();
    //     }, 5000);
    //     clearTimeout(id);
    // }
    // closeModal()
    return (
        <div className={s.Modal}>
            <h4 className={s.Text}>
                Привет! Для начала работы внеси текущий баланс своего счета!
            </h4>
            <p className={s.AddText}>
                Ты не можешь тратить деньги пока их у тебя нет :)
            </p>
        </div>
    );
};
export default BalanceModal;
