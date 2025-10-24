import { makeRequest } from './makeRequest';
// Auth API
// Patients API
export const getPatients = async () => {
  const response = await makeRequest.get('/patients/all-patients');
  return response.data;
};

export const getPatientById = async (id) => {
  const response = await makeRequest.get(`/patients/one-patient/${id}`);
  return response.data;
};
// Pharmacy API
// User API
export const getUsers = async () => {
  const response = await makeRequest.get('/user/get-all-user-records');
  return response.data;
};

// Expense API
export const getExpenses = async () => {
  const response = await makeRequest.get('/expense/get-all-expense-records');
  return response.data;
};

export const getExpenseById = async (id) => {
  const response = await makeRequest.get(`/expense/get-one-expense-record/${id}`);
  return response.data;
};

export const createExpense = async (ExpenseData) => {
  const response = await makeRequest.post('/expense/add-expense-record', ExpenseData);
  return response.data;
};

export const updateExpense = async (id, ExpenseData) => {
  const response = await makeRequest.put(`/expense/update-expense-record/${id}`, ExpenseData);
  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await makeRequest.delete(`/expense/delete-expense-record/${id}`);
  return response.data;
};

export const restoreExpense = async (id) => {
  const response = await makeRequest.patch(`/expense/restore/${id}`);
  return response.data;
};