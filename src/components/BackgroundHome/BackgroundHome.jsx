import s from './BackgroundHome.module.css';
const BackgroundHome = () => {
    return (
        <div className={s.Container}>
            <div className={s.Topbox}>
                <div className={s.TopImg}></div>
            </div>
            <div className={s.Bottombox}>
                <div className={s.BottomImg}></div>
            </div>
        </div>
    );
};

export default BackgroundHome;
