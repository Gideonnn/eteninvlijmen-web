import axios from 'axios';

const updateUser = async user => axios.put(`http://localhost:3000/users/${user.name}`, user);

export default {
  updateUser,
};
