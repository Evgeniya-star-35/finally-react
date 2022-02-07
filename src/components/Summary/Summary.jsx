import year from '../../data/month.json';
import s from './Summary.module.css';

export default function Summary() {
    return (
        <>
            <div className={s.summaryWrap}>
                <h3 className={s.title}>Сводка</h3>
                <ul className={s.list}>
                    <li className={s.item}>
                        <p className={s.month}>март</p>
                        <p className={s.sum}>20000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>апрель</p>
                        <p className={s.sum}>20000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>май</p>
                        <p className={s.sum}>2000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>июнь</p>
                        <p className={s.sum}>2000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>июль</p>
                        <p className={s.sum}>2000</p>
                    </li>
                    <li className={s.item}>
                        <p className={s.month}>август</p>
                        <p className={s.sum}>2000</p>
                    </li>
                </ul>
            </div>
        </>
    );
}
