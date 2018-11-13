import types from './types';
import authService from '../services/auth.service';

const loadUsers = async ({ commit }) => {
  try {
    const { data } = await authService.getUsers();
    commit(types.LOAD_USERS_SUCCESS, data);
  } catch (err) {
    commit(types.LOAD_USERS_FAILURE, err);
  }
};

export default {
  [types.LOAD_USERS]: loadUsers,
};
