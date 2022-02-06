import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api/v1/';

const addTransaction = (transaction, balance) =>
    axios.post('/api/transaction/', { transaction, balance });
const deleteTransaction = transactionId =>
    axios.delete(`/api/transaction/:id${transactionId}`);
const editTransaction = (transaction, balance) =>
    axios.put(`/api/transaction/${transaction._id}`, { transaction, balance });
const getTransactionsByDate = date =>
    axios.get(`/api/transaction/:date${date}`);
const getTransactionsByPeriod = period =>
    axios.get(`/api/transaction/period/:period${period}`);

export {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactionsByDate,
    getTransactionsByPeriod,
};
