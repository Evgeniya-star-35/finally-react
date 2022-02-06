import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// const HomePage = lazy(() =>
//     import('./_pages/HomePage' /* webpackChunkName: "home-page" */),
// );
const BalancePage = lazy(() =>
    import('./_pages/BalancePage' /* webpackChunkName: "balance-page" */),
);
function App() {
    return (
        <>
            <Suspense fallback={'...Loading'}>
                <Routes>
                    <Route path="/" element={<BalancePage />} />
                    {/* <Route path="/" element={<HomePage />} /> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
