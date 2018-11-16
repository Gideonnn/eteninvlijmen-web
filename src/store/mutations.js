import types from './types';

const loadUsersFailure = (state, error) => {
  console.error('Error while loading users: ', error);
};

const loadUsersSuccess = (state, users) => {
  state.auth.allUsers = users;
};

const loadWeekPrefFailure = (state, error) => {
  console.error('Error while loading dat preferences: ', error);
};

const loadWeekPrefSuccess = (state, prefs) => {
  state.ui.dayPreference = prefs;
};

const selectUser = (state, userId) => {
  state.auth.selectedUserId = userId;
};

const showProfileSwitcher = state => {
  state.ui.showProfileSwitcher = true;
};

const hideProfileSwitcher = state => {
  state.ui.showProfileSwitcher = false;
};

const loadCurrentUser = state => {
  const userId = localStorage.getItem('user');
  if (userId) {
    state.auth.currentUserId = userId;
  }
};

const switchCurrentUser = state => {
  state.auth.currentUserId = state.auth.selectedUserId;
  state.ui.showProfileSwitcher = false;
  localStorage.setItem('user', state.auth.selectedUserId);
};

const toggleDay = (state, index) => {
  state.ui.dayPreference.splice(index, 1, !state.ui.dayPreference[index]);
};

export default {
  [types.LOAD_USERS_FAILURE]: loadUsersFailure,
  [types.LOAD_USERS_SUCCESS]: loadUsersSuccess,
  [types.LOAD_WEEK_PREF_FAILURE]: loadWeekPrefFailure,
  [types.LOAD_WEEK_PREF_SUCCESS]: loadWeekPrefSuccess,
  [types.SELECT_USER]: selectUser,
  [types.SHOW_PROFILE_SWITCHER]: showProfileSwitcher,
  [types.HIDE_PROFILE_SWITCHER]: hideProfileSwitcher,
  [types.LOAD_CURRENT_USER]: loadCurrentUser,
  [types.SWITCH_CURRENT_USER]: switchCurrentUser,
  [types.TOGGLE_DAY]: toggleDay,
};
