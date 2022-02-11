import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const addTransaction = (transaction, balance) =>
    axios.post('/transaction', transaction, balance);
const deleteTransaction = transactionId =>
    axios.delete(`/transaction/:id${transactionId}`);
const editTransaction = (transaction, balance) =>
    axios.put(`/transaction/${transaction._id}`, { transaction, balance });
const getTransactionsByDate = date => axios.get(`/transaction/:date:${date}`);
const getTransactionsByPeriod = period =>
    axios.get(`/transaction/period/:period${period}`);

export {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactionsByDate,
    getTransactionsByPeriod,
};
