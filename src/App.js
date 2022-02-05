import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Container from 'components/Container/Container';
// import Header from 'components/Header';
import AuthHeader from 'components/Header/AuthHeader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from './routes/publicRouter';
import PrivateRoute from './routes/privateRouter';
import { getCurrentToken, getFetchingCurrentUser } from './redux/auth';
import { getCurrentUser } from './redux/auth';

const HomePage = lazy(() =>
    import('./_pages/HomePage' /* webpackChunkName: "home-page" */),
);
const BalancePage = lazy(() =>
    import('./_pages/BalancePage' /*webpackChunkName: "balance-page" */),
);
const MainPage = lazy(() =>
    import('./_pages/MainPage' /*webpackChunkName: "main-page" */),
);

function App() {
    const dispatch = useDispatch();
    const isFetchCurrentUser = useSelector(getFetchingCurrentUser);
    const isAuth = useSelector(getCurrentToken);
    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    return (
        // !isFetchCurrentUser && (
        <>

            {/* <Header /> */}
            <AuthHeader />
            <Container>
                

            <ToastContainer />
            <Suspense fallback={'...Loading'}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PublicRoute isAuth={isAuth} element={HomePage} />
                        }
                    />
                    <Route
                        path="/balance"
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                element={BalancePage}
                            />
                        }
                    />
                    <Route
                        path="/mainPage"
                        element={
                            <PrivateRoute isAuth={isAuth} element={MainPage} />
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
