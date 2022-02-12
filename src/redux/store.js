import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-reducer';

import { transactions } from 'redux/transactions';
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
const transactionsPersistConfig = {
    key: 'transaction',
    storage,
    whitelist: ['transactionsDay'],
};
const authPersistReducer = persistReducer(authPersistConfig, authReducer);
const transactionsPersistReducer = persistReducer(
    transactionsPersistConfig,
    transactions,
);
export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        transactions: transactionsPersistReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REGISTER,
                    PAUSE,
                    REHYDRATE,
                    PERSIST,
                    PURGE,
                ],
            },
        }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
