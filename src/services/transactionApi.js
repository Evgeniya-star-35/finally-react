import axios from 'axios';

axios.defaults.baseURL = 'https://finally-node.herokuapp.com/api';

const addTransaction = transaction => axios.post('/transaction', transaction);
const deleteTransaction = id => axios.delete(`/transaction/${id}`);
const editTransaction = (transaction, balance) =>
    axios.put(`/transaction/${transaction.id}`, { transaction, balance });
const getTransactionsByDate = date => axios.get(`/transaction/${date}`);
const getTransactionsByPeriod = period =>
    axios.get(`/transaction/period/${period}`);

export {
    addTransaction,
    deleteTransaction,
    editTransaction,
    getTransactionsByDate,
    getTransactionsByPeriod,
};
