import { toast } from 'react-toastify';
import { store } from 'redux/store';
import {
    getTransactionsRequest,
    getTransactionsSuccess,
    getTransactionsError,
    addTransactionRequest,
    addTransactionSuccess,
    addTransactionError,
    deleteTransactionRequest,
    deleteTransactionSuccess,
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

const setBalanceOperation = balance => async (dispatch, getState) => {
    dispatch(setTotalBalanceRequest());

    try {
        const response = await fetchBalance(balance);
        dispatch(setTotalBalanceSuccess(response.data.data.balance));
    } catch ({ response }) {
        if (response.data.message === 'Unvalid token') {
            const response = await fetchBalance(balance);
            dispatch(setTotalBalanceSuccess(response.data.data.balance));
            return;
        }
        dispatch(setTotalBalanceError(response.data.message));
        toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const addTransactionOperation = transaction => async (dispatch, getState) => {
    dispatch(addTransactionRequest());
    const balance = calculateBalance(transaction, 'add');
    const splitedDate = dateSplitter(transaction.date);
    try {
        const response = await addTransaction(
            Object.assign(transaction, splitedDate),
            balance,
        );

        dispatch(addTransactionSuccess(response.data.resultTransaction));
        dispatch(setTotalBalanceSuccess(response.data.balance));
    } catch ({ response }) {
        if (response.data.message === 'Unvalid token') {
            const response = await addTransaction(
                Object.assign(transaction, splitedDate),
                balance,
            );
            dispatch(addTransactionSuccess(response.data.resultTransaction));
            dispatch(setTotalBalanceSuccess(response.data.balance));
            return;
        }
        dispatch(addTransactionError(response.data.message));
        toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const deleteTransactionOperation =
    transaction => async (dispatch, getState) => {
        dispatch(deleteTransactionRequest());
        const balance = calculateBalance(transaction, 'delete');
        try {
            await deleteTransaction(transaction._id);
            const setBalanceData = await fetchBalance(balance);
            dispatch(deleteTransactionSuccess(transaction._id));
            dispatch(setTotalBalanceSuccess(setBalanceData.data.data.balance));
        } catch ({ response }) {
            if (response.data.message === 'Unvalid token') {
                await deleteTransaction(transaction._id);
                const setBalanceData = await fetchBalance(balance);
                dispatch(deleteTransactionSuccess(transaction._id));
                dispatch(
                    setTotalBalanceSuccess(setBalanceData.data.data.balance),
                );
                return;
            }
            dispatch(addTransactionError(response.data.message));
            toast.error(response.data.message, {
                position: 'top-center',
                autoClose: 2500,
            });
        }
    };

const editTransactionOperation = transaction => async (dispatch, getState) => {
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
    } catch ({ response }) {
        if (response.data.message === 'Invalid token') {
            const response = await getTransactionsByDate(date);

            dispatch(getTransactionsSuccess(response.data.result));
            return;
        }
        dispatch(getTransactionsError(response.data.message));
        toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getTransactionsMonthYear = (month, year) => async dispatch => {
    dispatch(getTransactionsMonthYearRequest());
    try {
        const response = await getTransactionsByPeriod(`${month}-${year}`);
        dispatch(getTransactionsMonthYearSuccess(response.data.result));
    } catch ({ response }) {
        if (response.data.message === 'Unvalid token') {
            const response = await getTransactionsByPeriod(`${month}-${year}`);
            dispatch(getTransactionsMonthYearSuccess(response.data.result));
            return;
        }
        dispatch(getTransactionsMonthYearError(response.data.message));
        toast.error(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getMonthlyBalancesYear = year => async (dispatch, getState) => {
    dispatch(getMonthlyBalanceRequest());
    try {
        const response = await getTransactionsByPeriod(year);
        const balances = calculateBalancesPerMonth(response.data.result);
        dispatch(getMonthlyBalanceSuccess(balances));
    } catch ({ response }) {
        if (response.data.message === 'Unvalid token') {
            // await refresh(dispatch, getState);
            const response = await getTransactionsByPeriod(year);
            const balances = calculateBalancesPerMonth(response.data.result);
            dispatch(getMonthlyBalanceSuccess(balances));
            return;
        }
        dispatch(getMonthlyBalanceError(response.data.message));
        toast.error(response.data.message, {
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
    const initialBalance = store.getState().transactions.TotalBalance;
    const transactionsList = store.getState().transactions.getTransactionsDay;
    switch (actionType) {
        case 'add':
            return transaction.type === 'income'
                ? Number(initialBalance) + Number(transaction.sum)
                : Number(initialBalance) - Number(transaction.sum);
        case 'delete':
            return transaction.type === 'income'
                ? Number(initialBalance) - Number(transaction.sum)
                : Number(initialBalance) + Number(transaction.sum);
        case 'edit':
            const initialTransaction = transactionsList.find(
                item => item._id === transaction._id,
            );
            const priorBalance =
                Number(initialBalance) - Number(initialTransaction.sum);
            return transaction.type === 'income'
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
