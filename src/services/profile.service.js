import axios from 'axios';

const updateUser = async user => axios.put(`/users/${user.name}`, user);

export default {
  updateUser,
};
