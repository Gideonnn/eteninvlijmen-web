import axios from 'axios';

const getUsers = async () => axios.get('http://localhost:3000/users');

export default {
  getUsers,
};
