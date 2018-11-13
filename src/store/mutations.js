import types from './types';

const loadUsersFailure = (state, error) => {
  console.error('Error while loading users: ', error);
};

const loadUsersSuccess = (state, users) => {
  state.auth.users = users;
};

const toggleDay = (state, index) => {
  state.ui.dayPreference.splice(index, 1, !state.ui.dayPreference[index]);
};

export default {
  [types.LOAD_USERS_FAILURE]: loadUsersFailure,
  [types.LOAD_USERS_SUCCESS]: loadUsersSuccess,
  [types.TOGGLE_DAY]: toggleDay,
};
