import './App.css';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'components/Container/Container';
// import Header from 'components/Header';
import AuthHeader from 'components/Header/AuthHeader';
const HomePage = lazy(() =>
    import('./_pages/HomePage' /* webpackChunkName: "home-page" */),
);

function App() {
    return (
        <>
            {/* <Header /> */}
            <AuthHeader />
            <Container>
                <Suspense fallback={'...Loading'}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    );
}

export default App;
