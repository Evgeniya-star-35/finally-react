import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import '@fontsource/roboto';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        {/* <PersistGate
                loading={<h2>Wait,loading...</h2>}
                persistor={persistor}
            > */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/* </PersistGate> */}
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById('root'),
);
