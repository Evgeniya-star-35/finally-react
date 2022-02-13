const getTotalBalance = state => state.auth.user.user.balance;
const getMonthlyBalances = state => state.transactions.monthlyBalancesYear;
const getTransactionsDay = state => state.transactions.transactionsDay;
const getTransactionsMonth = state => state.transactions.transactionsMonthYear;
const getLoader = state => state.transactions.loader;
const getTransactionError = state => state.transactions.error;

export {
    getTotalBalance,
    getMonthlyBalances,
    getTransactionsDay,
    getTransactionsMonth,
    getLoader,
    getTransactionError,
};
