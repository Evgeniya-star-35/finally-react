import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api/v1/';

const addTransaction = (transaction, balance) =>
    axios.post('/transaction', { transaction, balance });
const deleteTransaction = transactionId =>
    axios.delete(`/transaction/${transactionId}`);
const editTransaction = (transaction, balance) =>
    axios.put(`/transaction/${transaction._id}`, { transaction, balance });
const getTransactionsByDate = date => axios.get(`/transaction/${date}`);
const getTransactionsByPeriod = period =>
    axios.get(`/transaction/period/${period}`);
const setBalance = balance => axios.patch('/users/balance', { balance });

export {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactionsByDate,
    getTransactionsByPeriod,
    setBalance,
};
