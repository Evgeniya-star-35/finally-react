import s from './BackgroundHome.module.css';
const BackgroundHome = ({ children }) => {
    return (
        <>
            {/* <div className={s.Container}> */}
            {/* <div className={s.Topbox}>
                <div className={s.TopImg}></div>
                <div className={s.Title}></div>
            </div>
                <div className={s.BottomImg}></div> */}
            {/* </div> */}

            <div className={s.BottomImg}>
                <div className={s.Topbox}></div>
                <div className={s.TopImg}></div>
                <div className={s.Title}></div>

                {children}
            </div>
        </>
    );
};

export default BackgroundHome;
