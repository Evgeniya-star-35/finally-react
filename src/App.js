import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './routes/publicRouter';
import PrivateRoute from './routes/privateRouter';
import transactionsOperations from 'redux/transactions/transactions-operations';

import {
    getCurrentToken,
    getCurrentUser,
    getFetchingCurrentUser,
} from './redux/auth';
import Loader from './components/Loader';

const HomePage = lazy(() =>
    import('./_pages/HomePage' /* webpackChunkName: "home-page" */),
);
const TransactionPage = lazy(() =>
    import(
        './_pages/TransactionPage' /*webpackChunkName: "transaction-page" */
    ),
);
const CostsTransactionPage = lazy(() =>
    import(
        './_pages/CostsTransactionPage' /*webpackChunkName: "coststransaction-page" */
    ),
);
const MainPage = lazy(() =>
    import('./_pages/MainPage' /*webpackChunkName: "main-page" */),
);
const ReportPage = lazy(() =>
    import('./_pages/ReportPage' /* webpackChunkName: "report-page" */),
);

const GooglePage = lazy(() => import('./_pages/GooglePage'));

const DevelopersView = lazy(() =>
    import(
        './_pages/DevelopersView/DevelopersView' /*webpackChunkName: "developers-view" */
    ),
);
function App() {
    const dispatch = useDispatch();
    const isFetchCurrentUser = useSelector(getFetchingCurrentUser);
    const { isAuth } = useSelector(state => state.auth);
    useEffect(() => {
        if (isAuth) {
            dispatch(getCurrentUser());
        }
    }, [dispatch, isAuth]);
    return (
        <>
            <ToastContainer />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PublicRoute
                                isAuth={isAuth}
                                component={<HomePage />}
                            />
                        }
                    />
                    <Route
                        path="/developers"
                        element={
                            <PublicRoute
                                isAuth={isAuth}
                                component={<DevelopersView />}
                            />
                        }
                    />
                    <Route
                        path="/transactions"
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                component={<TransactionPage />}
                            />
                        }
                    />
                    <Route
                        path="/costsTransactions"
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                component={<CostsTransactionPage />}
                            />
                        }
                    />
                    <Route
                        path="/mainPage"
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                component={<MainPage />}
                            />
                        }
                    />
                    <Route
                        path="/reports"
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                component={<ReportPage />}
                            />
                        }
                    />
                    <Route
                        path="/qwe"
                        element={
                            <PublicRoute
                                isAuth={isAuth}
                                component={<GooglePage />}
                            />
                        }
                    />
                    {/* <Route path="/qwe" element={<GooglePage />} /> */}
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
