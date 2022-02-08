import s from './BackgroundHome.module.css';
const BackgroundHome = ({ children }) => {
    return (
        <>
            <div className={s.BottomImg}>
                {/* <div className={s.Topbox}></div>
                <div className={s.TopImg}></div> */}

                {children}
            </div>
        </>
    );
};

export default BackgroundHome;
