import { createAction } from '@reduxjs/toolkit';

const getTransactionsRequest = createAction('getTransactionsRequest');
const getTransactionsSuccess = createAction('getTransactionsSuccess');
const getTransactionsError = createAction('getTransactionsError');

const addTransactionRequest = createAction('addTransactionRequest');
const addTransactionSuccess = createAction('addTransactionSuccess');
const addTransactionError = createAction('addTransactionError');

const deleteTransactionRequest = createAction('deleteTransactionRequest');
const deleteTransactionSuccess = createAction('deleteTransactionSuccess');
const deleteTransactionError = createAction('deleteTransactionError');

const getTransactionsMonthYearRequest = createAction(
    'getTransactionsMonthYearRequest',
);
const getTransactionsMonthYearSuccess = createAction(
    'getTransactionsMonthYearSuccess',
);
const getTransactionsMonthYearError = createAction(
    'getTransactionsMonthYearError',
);

const getMonthlyBalanceRequest = createAction('getMonthlyBalanceRequest');
const getMonthlyBalanceSuccess = createAction('getMonthlyBalanceSuccess');
const getMonthlyBalanceError = createAction('getMonthlyBalanceError');

const setTotalBalanceRequest = createAction('setTotalBalanceRequest');
const setTotalBalanceSuccess = createAction('setTotalBalanceSuccess');
const setTotalBalanceError = createAction('setTotalBalanceError');

export {
    getTransactionsRequest,
    getTransactionsSuccess,
    getTransactionsError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    deleteTransactionRequest,
    deleteTransactionSuccess,
    deleteTransactionError,
    getMonthlyBalanceRequest,
    getMonthlyBalanceSuccess,
    getMonthlyBalanceError,
    setTotalBalanceRequest,
    setTotalBalanceSuccess,
    setTotalBalanceError,
    getTransactionsMonthYearRequest,
    getTransactionsMonthYearSuccess,
    getTransactionsMonthYearError,
};
