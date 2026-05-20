import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const getTasks = () => axios.get(API_URL).then(response => response.data);
const addTask = (task) => axios.post(API_URL, task).then(response => response.data);
const deleteTask = (taskId) => axios.delete(`${API_URL}/${taskId}`).then(() => ({}));
const toggleComplete = (taskId) => axios.patch(`${API_URL}/${taskId}`, { completed: true }).then(response => response.data);

export default {
  getTasks,
  addTask,
  deleteTask,
  toggleComplete,
};