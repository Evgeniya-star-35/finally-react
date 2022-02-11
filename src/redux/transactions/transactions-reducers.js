import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    getTransactionsRequest,
    getTransactionsSuccess,
    getTransactionsError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    deleteTransactionRequest,
    deleteTransactionSuccess,
    deleteTransactionError,
    editTransactionRequest,
    editTransactionSuccess,
    editTransactionError,
    getMonthlyBalanceRequest,
    getMonthlyBalanceSuccess,
    getMonthlyBalanceError,
    setTotalBalanceRequest,
    setTotalBalanceSuccess,
    setTotalBalanceError,
    getTransactionsMonthYearRequest,
    getTransactionsMonthYearSuccess,
    getTransactionsMonthYearError,
} from './transactions-actions';
import {
    registerRequest,
    registerSuccess,
    registerError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    loginRequest,
    loginSuccess,
    loginError,
} from 'redux/auth';

const transactionsDay = createReducer([], {
    [getTransactionsSuccess]: (state, { payload }) => [...state, ...payload],
    [addTransactionSuccess]: (state, { payload }) => [...state, payload],
    [deleteTransactionSuccess]: (state, { payload }) =>
        state.filter(item => item._id !== payload),
    [editTransactionSuccess]: (state, { payload }) =>
        state.map(item => (item._id === payload._id ? payload : item)),
});

const transactionsMonthYear = createReducer([], {
    [getTransactionsMonthYearSuccess]: (_, { payload }) => payload,
});

const monthlyBalancesYear = createReducer([], {
    [getMonthlyBalanceSuccess]: (_, { payload }) => payload,
});

const totalBalance = createReducer(0, {
    [setTotalBalanceSuccess]: (_, { payload }) => payload,
});

const loader = createReducer(false, {
    [getTransactionsRequest]: () => true,
    [getTransactionsSuccess]: () => false,
    [getTransactionsError]: () => false,
    [addTransactionRequest]: () => true,
    [addTransactionSuccess]: () => false,
    [addTransactionError]: () => false,
    [deleteTransactionRequest]: () => true,
    [deleteTransactionSuccess]: () => false,
    [deleteTransactionError]: () => false,
    [editTransactionRequest]: () => true,
    [editTransactionSuccess]: () => false,
    [editTransactionError]: () => false,
    [getMonthlyBalanceRequest]: () => true,
    [getMonthlyBalanceSuccess]: () => false,
    [getMonthlyBalanceError]: () => false,
    [setTotalBalanceRequest]: () => true,
    [setTotalBalanceSuccess]: () => false,
    [setTotalBalanceError]: () => false,
    [getTransactionsMonthYearRequest]: () => true,
    [getTransactionsMonthYearSuccess]: () => false,
    [getTransactionsMonthYearError]: () => false,
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,
    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginError]: () => false,
    [logoutRequest]: () => true,
    [logoutSuccess]: () => false,
    [logoutError]: () => false,
});

const error = createReducer(null, {
    [getTransactionsRequest]: () => null,
    [getTransactionsSuccess]: () => null,
    [getTransactionsError]: (_, { payload }) => payload,
    [addTransactionRequest]: () => null,
    [addTransactionSuccess]: () => null,
    [addTransactionError]: (_, { payload }) => payload,
    [deleteTransactionRequest]: () => null,
    [deleteTransactionSuccess]: () => null,
    [deleteTransactionError]: (_, { payload }) => payload,
    [editTransactionRequest]: () => null,
    [editTransactionSuccess]: () => null,
    [editTransactionError]: (_, { payload }) => payload,
    [getMonthlyBalanceRequest]: () => null,
    [getMonthlyBalanceSuccess]: () => null,
    [getMonthlyBalanceError]: (_, { payload }) => payload,
    [setTotalBalanceRequest]: () => null,
    [setTotalBalanceSuccess]: () => null,
    [setTotalBalanceError]: (_, { payload }) => payload,
    [getTransactionsMonthYearRequest]: () => null,
    [getTransactionsMonthYearSuccess]: () => null,
    [getTransactionsMonthYearError]: (_, { payload }) => payload,
});

const transactions = combineReducers({
    transactionsDay,
    transactionsMonthYear,
    monthlyBalancesYear,
    totalBalance,
    loader,
    error,
});

export { transactions };
