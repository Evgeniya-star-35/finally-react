import { toast } from 'react-toastify';
import { setBalance, getCurrentUser } from '../auth/auth-operations';
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
import { updateBalance } from 'services/authApi';

const setBalanceOperation = balance => async dispatch => {
    dispatch(setTotalBalanceRequest());

    try {
        const response = await updateBalance(balance);
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
        const response = await addTransaction(transaction);
        dispatch(addTransactionSuccess(response.data.newTransaction));
        dispatch(setBalance(response.data.balance));
    } catch (error) {
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
        dispatch(deleteTransactionSuccess(transaction.id));
        dispatch(setBalance(response.data.balance));
        toast.success(response.data.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    } catch (error) {
        dispatch(deleteTransactionError(error.message));
        toast.error('???????????????????? ???? ??????????????', {
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
    if (!month && !year) {
        return;
    }
    dispatch(getTransactionsMonthYearRequest());
    try {
        const response = await getTransactionsByPeriod(`${month}.${year}`);

        dispatch(getTransactionsMonthYearSuccess(response.data.result));
    } catch (error) {
        dispatch(getTransactionsMonthYearError(error.message));
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 2500,
        });
    }
};
const getMonthlyBalancesForSummary = year => async dispatch => {
    if (!year) {
        return;
    }
    dispatch(getMonthlyBalanceRequest());

    try {
        const response = await getTransactionsByPeriod(`${year}`);
        dispatch(getCurrentUser());
        const balances = calculateBalancesPerMonth(response.data.result);
        dispatch(getMonthlyBalanceSuccess(balances));
    } catch (error) {
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
    getMonthlyBalancesForSummary,
    getTransactionsDayOperation,
};

export default transactionsOperations;
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
                    transaction.type === 'incomes'
                        ? +transaction.sum
                        : -transaction.sum,
            });
        } else {
            return transaction.type === 'incomes'
                ? (balanceByMonth.value += transaction.sum)
                : (balanceByMonth.value -= transaction.sum);
        }
    });
    return result;
};
