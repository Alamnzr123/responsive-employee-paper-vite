import axios from 'axios';

const server = 'https://api-trials.x5.com.au/api';

const getEmployees = async () => {
  const { data } = await axios.get(`${server}/articles`);
  return data.data.articles;
};

const getEmployee = async (id) => {
  const { data } = await axios.get(`${server}/articles/${id}`);
  return data;
};

const addEmployee = async (employee) => {
  const { data } = await axios.post(`${server}/articles`, employee);
  return data;
};

const editEmployee = async (id, employee) => {
  const { data } = await axios.put(`${server}/articles/${id}`, employee);
  return data;
};

const deleteEmployee = async (id) => {
  const { data } = await axios.delete(`${server}/articles/${id}`);
  return data;
};

export default {
  getEmployees,
  getEmployee,
  addEmployee,
  editEmployee,
  deleteEmployee,
};
