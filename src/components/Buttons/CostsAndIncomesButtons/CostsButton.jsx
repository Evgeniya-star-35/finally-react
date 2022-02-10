import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import Media from 'react-media';
import s from './CostsAndIncomesButton.module.css';

export default function CostsButton({ getType }) {
    const location = useLocation();
    return (
        <>
            <Media
                query="(max-width: 767.98px)"
                render={() => (
                    <Link
                        to={{
                            pathname: '/transactions',
                            state: {
                                from: { location },
                            },
                        }}
                    >
                        <button
                            className={s.btn}
                            type="button"
                            title="cost"
                            onClick={getType}
                        >
                            расход
                        </button>
                    </Link>
                )}
            />
            <Media
                query="(min-width: 768px)"
                render={() => (
                    <button
                        className={s.btn}
                        type="button"
                        title="cost"
                        onClick={getType}
                    >
                        расход
                    </button>
                )}
            />
        </>
    );
}
