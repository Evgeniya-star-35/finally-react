import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Lines } from 'react-preloaders';

import Container from 'components/Container/Container';
import AuthHeader from 'components/Header/AuthHeader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './routes/publicRouter';
import PrivateRoute from './routes/privateRouter';
import {
    getCurrentToken,
    getCurrentUser,
    // getFetchingCurrentUser
} from './redux/auth';

const HomePage = lazy(() =>
    import('./_pages/HomePage' /* webpackChunkName: "home-page" */),
);
const BalancePage = lazy(() =>
    import('./_pages/BalancePage' /*webpackChunkName: "balance-page" */),
);
const MainPage = lazy(() =>
    import('./_pages/MainPage' /*webpackChunkName: "main-page" */),
);
const ReportPage = lazy(() =>
    import('./_pages/ReportPage' /* webpackChunkName: "report-page" */),
);

function App() {
    const dispatch = useDispatch();
    // const isFetchCurrentUser = useSelector(getFetchingCurrentUser);
    const isAuth = useSelector(getCurrentToken);
    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    return (
        // !isFetchCurrentUser && (
        <>
            {/* <Header /> */}
            <AuthHeader />
            {}
            <Container>
                <Lines />
                <ToastContainer />
                <Suspense fallback={'...Loading'}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PublicRoute
                                    isAuth={isAuth}
                                    element={HomePage}
                                />
                            }
                        />
                        <Route
                            path="/balance"
                            element={
                                // <PrivateRoute
                                <PublicRoute
                                    isAuth={isAuth}
                                    element={BalancePage}
                                />
                            }
                        />
                        <Route
                            path="/mainPage"
                            element={
                                // <PrivateRoute
                                <PublicRoute
                                    isAuth={isAuth}
                                    element={MainPage}
                                />
                            }
                        />
                        <Route
                            path="/reports"
                            element={
                                // <PrivateRoute
                                <PublicRoute
                                    isAuth={isAuth}
                                    element={ReportPage}
                                />
                            }
                        />
                    </Routes>
                </Suspense>
            </Container>
        </>
        // )
    );
}

export default App;
