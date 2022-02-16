const getMonthlyBalances = state => state.transactions.monthlyBalancesYear;
const getTransactionsDay = state => state.transactions.transactionsDay;
const getTransactionsMonth = state => state.transactions.transactionsMonthYear;
const getLoader = state => state.transactions.loader;
const getTransactionError = state => state.transactions.error;

export {
    getMonthlyBalances,
    getTransactionsDay,
    getTransactionsMonth,
    getLoader,
    getTransactionError,
};
