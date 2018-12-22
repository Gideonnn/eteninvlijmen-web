import axios from 'axios';

const getUsers = async () => axios.get(`/users`);

export default {
  getUsers,
};
