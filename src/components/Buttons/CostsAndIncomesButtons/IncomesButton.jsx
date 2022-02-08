import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import s from './CostsAndIncomesButton.module.css';

export default function IncomesButton() {
    const location = useLocation();
    return (
        <>
            <Link
                to={{
                    pathname: '/transactions',
                    state: {
                        from: { location },
                    },
                }}
            >
                <button className={s.btn}>доход</button>
            </Link>
        </>
    );
}
