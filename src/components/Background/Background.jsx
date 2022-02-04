import s from './Background.module.css';
const Background = () => {
    return (
        <div className={s.Container}>
            <div className={s.Topbox}>
                {/* <div className={s.TopImg}></div> */}
            </div>
            <div className={s.Bottombox}>
                <div className={s.BottomImg}></div>
            </div>
        </div>
    );
};

export default Background;
