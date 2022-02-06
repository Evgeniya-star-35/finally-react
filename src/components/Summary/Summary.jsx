import s from './Summary.module.css';

export default function Summary() {
    return (
        <>
            <div className={s.summary}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.month}>март</p>
                        <p className={s.sum}>20000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>апрэль</p>
                        <p className={s.sum}>20000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}></p>
                        <p className={s.sum}></p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}></p>
                        <p className={s.sum}></p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}></p>
                        <p className={s.sum}></p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}></p>
                        <p className={s.sum}></p>
                    </li>
                </ul>
            </div>
        </>
    );
}
