import s from './Background.module.css';
const Background = ({ children }) => {
    return (
        <div className={s.Bg}>
            <div className={s.Top}></div>
            <div className={s.Bottom}></div>
        </div>
    );
};

export default Background;
