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
    getTransactionsByDate,
    getTransactionsByPeriod,
} from 'services/transactionApi';
import { fetchBalance } from 'services/authApi';

const setBalanceOperation = balance => async dispatch => {
    console.log(balance);
    dispatch(setTotalBalanceRequest());

    try {
        const response = await fetchBalance(balance);
        console.log(response);
        console.log(response.data.data.balance);
        dispatch(setTotalBalanceSuccess(response.data.data.balance));
    } catch (error) {
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
        if (newBalance < 0) return;
        dispatch(setBalanceOperation(newBalance));
        const response = await addTransaction(transaction);
        console.log(response.data);
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
    console.log(transaction.id);

    try {
        const response = await deleteTransaction(transaction.id);

        const newBalance = calculateBalance(transaction, 'delete');

        dispatch(setBalanceOperation(newBalance));
        dispatch(deleteTransactionSuccess(transaction.id));
        toast.success(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
        dispatch(setTotalBalanceSuccess(newBalance));
        dispatch(getCurrentUser());
    } catch (error) {
        dispatch(deleteTransactionError(error.message));
        toast.error('Транзакция не найдена', {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};

const getTransactionsDayOperation = date => async dispatch => {
    if (!date) {
        return;
    }
    dispatch(getTransactionsRequest());

    try {
        const response = await getTransactionsByDate(date);
        if (response.data.result.length === 0) {
            return;
        }
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
    // console.log(month, year);
    if (!month && !year) {
        return;
    }
    dispatch(getTransactionsMonthYearRequest());
    try {
        const response = await getTransactionsByPeriod(`${month}.${year}`);
        console.log(response);
        // const balances = calculateBalancesPerMonth(response.data.result);
        // console.log(balances);
        //   dispatch(getTransactionsMonthYearSuccess(balances));
        dispatch(getTransactionsMonthYearSuccess(response.data.result));
        // dispatch(getCurrentUser());
    } catch (error) {
        dispatch(getTransactionsMonthYearError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};
const getMonthlyBalancesForSummary = year => async dispatch => {
    // const getMonthlyBalancesYear = year => async dispatch => {
    if (!year) {
        return;
    }
    dispatch(getTransactionsMonthYearRequest());
    // dispatch(getMonthlyBalanceRequest());
    try {
        const response = await getTransactionsByPeriod(`${year}`);
        console.log(response);
        console.log(response.data.result.length);
        const balances = calculateBalancesPerMonth(response.data.result);
        console.log(balances);
        // dispatch(getMonthlyBalanceSuccess(balances));
        dispatch(getTransactionsMonthYearSuccess(balances));
        // dispatch(getTransactionsMonthYearSuccess(response.data.result));
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
    getTransactionsMonthYear,
    // getMonthlyBalancesYear,
    getMonthlyBalancesForSummary,
    getTransactionsDayOperation,
};

export default transactionsOperations;

//-------------helpers--------------------
const calculateBalance = (transaction, actionType) => {
    const initialBalance = store.getState().auth.user.user.balance;
    console.log(initialBalance);
    const transactionsList = store.getState().transactions.transactionsDay;
    console.log(transactionsList);
    // if (transactionsList.length === 0) return;
    switch (actionType) {
        case 'add':
            return transaction.type === 'incomes'
                ? Number(initialBalance) + Number(transaction.sum)
                : Number(initialBalance) - Number(transaction.sum);
        case 'delete':
            return transaction.type === 'incomes'
                ? Number(initialBalance) - Number(transaction.sum)
                : Number(initialBalance) + Number(transaction.sum);

        default:
            return;
    }
};

const calculateBalancesPerMonth = transactions => {
    const result = [];
    transactions.map(transaction => {
        console.log(transaction);
        const balanceByMonth = result.find(
            item => item.month === transaction.month,
        );
        console.log(balanceByMonth);
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
    console.log(result);
    return result;
};
