import { toast } from 'react-toastify';
import { store } from 'redux/store';
import { getCurrentUser } from '../auth/auth-operations';
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
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactionsByDate,
    getTransactionsByPeriod,
} from 'services/transactionApi';
import { fetchBalance } from 'services/authApi';

const setBalanceOperation = balance => async dispatch => {
    dispatch(setTotalBalanceRequest());

    try {
        const response = await fetchBalance(balance);
        dispatch(setTotalBalanceSuccess(response.data.data.balance));
    } catch (error) {
        // if (response.data.message === 'Unvalid token') {
        //     const response = await fetchBalance(balance);
        //     dispatch(setTotalBalanceSuccess(response.data.data.balance));
        //     return;
        // }
        dispatch(setTotalBalanceError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const addTransactionOperation = transaction => async dispatch => {
    dispatch(addTransactionRequest());

    try {
        const newBalance = calculateBalance(transaction, 'add');
        console.log(newBalance);
        dispatch(setBalanceOperation(newBalance));
        const response = await addTransaction(transaction);
        console.log(response);
        dispatch(addTransactionSuccess(response.data.newTransaction));
        dispatch(setTotalBalanceSuccess(newBalance));
        dispatch(getCurrentUser());
    } catch (error) {
        if (error.message === 'Unvalid token') {
            dispatch(addTransactionSuccess(error.resultTransaction));
            dispatch(setTotalBalanceSuccess(error.balance));
            return;
        }
        dispatch(addTransactionError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const deleteTransactionOperation = transaction => async dispatch => {
    dispatch(deleteTransactionRequest());
    try {
        const response = await deleteTransaction(transaction.id);
        console.log(response);
        const newBalance = calculateBalance(transaction, 'delete');
        console.log(newBalance);
        dispatch(setBalanceOperation(newBalance));

        dispatch(setTotalBalanceSuccess(newBalance));
        dispatch(getCurrentUser());
    } catch (error) {
        toast.error('Транзакция не найдена', {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const editTransactionOperation = transaction => async dispatch => {
    dispatch(editTransactionRequest());
    const balance = calculateBalance(transaction, 'edit');

    try {
        const response = await fetch.editTransaction(transaction, balance);
        dispatch(editTransactionSuccess(response.data.result));
        dispatch(setTotalBalanceSuccess(response.data.balance));
    } catch ({ response }) {
        if (response.data.message === 'Unvalid token') {
            const response = await editTransaction(transaction, balance);
            dispatch(editTransactionSuccess(response.data.result));
            dispatch(setTotalBalanceSuccess(response.data.balance));
            return;
        }
        dispatch(editTransactionError(response.data.message));
        toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getTransactionsDayOperation = date => async dispatch => {
    dispatch(getTransactionsRequest());

    try {
        const response = await getTransactionsByDate(date);
        dispatch(getTransactionsSuccess(response.data.result));
    } catch (error) {
        dispatch(getTransactionsError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getTransactionsMonthYear = (month, year) => async dispatch => {
    dispatch(getTransactionsMonthYearRequest());
    try {
        const response = await getTransactionsByPeriod(`${month}.${year}`);
        dispatch(getTransactionsMonthYearSuccess(response.data.result));
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch(getTransactionsMonthYearError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getMonthlyBalancesYear = year => async dispatch => {
    dispatch(getMonthlyBalanceRequest());
    console.log(year);
    try {
        const response = await getTransactionsByPeriod(year);
        console.log(response);
        const balances = calculateBalancesPerMonth(response.data.result);
        dispatch(getMonthlyBalanceSuccess(balances));
    } catch (error) {
        if (error.message === 'Unvalid token') {
            // await refresh(dispatch, getState);
            const response = await getTransactionsByPeriod(year);
            const balances = calculateBalancesPerMonth(error.result);
            dispatch(getMonthlyBalanceSuccess(balances));
            return;
        }
        dispatch(getMonthlyBalanceError(error.message.message));
        toast.error(error.message.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const transactionsOperations = {
    setBalanceOperation,
    addTransactionOperation,
    deleteTransactionOperation,
    editTransactionOperation,
    getTransactionsMonthYear,
    getMonthlyBalancesYear,
    getTransactionsDayOperation,
};

export default transactionsOperations;

//-------------helpers--------------------
const calculateBalance = (transaction, actionType) => {
    const initialBalance = store.getState().auth.user.user.balance;
    console.log(initialBalance);
    const transactionsList = store.getState().transactions.transactionsDay;
    console.log(transactionsList);
    switch (actionType) {
        case 'add':
            return transaction.type === 'incomes'
                ? Number(initialBalance) + Number(transaction.sum)
                : Number(initialBalance) - Number(transaction.sum);
        case 'delete':
            return transaction.type === 'incomes'
                ? Number(initialBalance) - Number(transaction.sum)
                : Number(initialBalance) + Number(transaction.sum);
        case 'edit':
            const initialTransaction = transactionsList.find(
                item => item.id === transaction.id,
            );
            const priorBalance =
                Number(initialBalance) - Number(initialTransaction.sum);
            return transaction.type === 'incomes'
                ? Number(priorBalance) + Number(transaction.sum)
                : Number(priorBalance) - Number(transaction.sum);
        default:
            return;
    }
};

const calculateBalancesPerMonth = transactions => {
    const result = [];
    transactions.map(transaction => {
        const balanceByMonth = result.find(
            item => item.month === transaction.month,
        );
        if (!balanceByMonth) {
            return result.push({
                month: transaction.month,
                value:
                    transaction.type === 'income'
                        ? +transaction.sum
                        : -transaction.sum,
            });
        } else {
            return transaction.type === 'income'
                ? (balanceByMonth.value += transaction.sum)
                : (balanceByMonth.value -= transaction.sum);
        }
    });

    return result;
};

const dateSplitter = date => {
    const splittedDate = {
        month: String(date.split('.')[1]),
        year: String(date.split('.')[2]),
    };
    return splittedDate;
};
