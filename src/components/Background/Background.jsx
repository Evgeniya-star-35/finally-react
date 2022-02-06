import s from './Background.module.css';
const Background = ({ children }) => {
    return (
        // <div className={s.Container}>

        <div className={s.BottomImg}>
            <div className={s.Topbox}></div>
            {children}
        </div>
        // </div>
    );
};

export default Background;
