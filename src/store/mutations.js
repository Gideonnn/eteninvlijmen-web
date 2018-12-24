import types from './types';
import router from '../router';

const loadNewsFailure = (state, error) => {
  console.error('Error while loading news: ', error);
  state.data.newsItems = [];
};

const loadNewsSuccess = (state, data) => {
  state.data.newsItems = data;
};

const loadSummaryFailure = (state, error) => {
  console.error('Error while loading summary: ', error);
};

const loadSummarySuccess = (state, summary) => {
  state.data.summary = summary
    .map(res => res.prefs)
    .reduce(
      (acc, cur) => {
        acc[0] += cur[0];
        acc[1] += cur[1];
        acc[2] += cur[2];
        acc[3] += cur[3];
        acc[4] += cur[4];
        acc[5] += cur[5];
        acc[6] += cur[6];
        return acc;
      },
      [0, 0, 0, 0, 0, 0, 0]
    )
    .map(sum => (sum > 0 ? Math.floor((sum / summary.length) * 100) : 0));
};

const loadUsersFailure = (state, error) => {
  console.error('Error while loading users: ', error);
};

const loadUsersSuccess = (state, users) => {
  state.auth.allUsers = users;
};

const loadWeekPrefFailure = (state, error) => {
  console.error('Error while loading dat preferences: ', error);
};

const loadWeekPrefSuccess = (state, preferences) => {
  state.ui.dayPreference = preferences;
};

const navigate = (state, route) => {
  router.push({ name: route });
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

const showWhatsNew = state => {
  state.ui.showWhatsNew = true;
};

const hideWhatsNew = state => {
  state.ui.showWhatsNew = false;
};

const hideToast = state => {
  state.ui.toast.type = '';
  state.ui.toast.message = '';
  state.ui.toast.visible = false;
};

const showToast = (state, { type, message }) => {
  state.ui.toast.type = type;
  state.ui.toast.message = message;
  state.ui.toast.visible = true;
};

const loadCurrentUser = state => {
  const userId = localStorage.getItem('user');
  if (userId) {
    state.auth.currentUserId = userId;
  }
};

const switchCurrentUser = (state, payload) => {
  state.auth.currentUserId = payload;
  state.ui.showProfileSwitcher = false;
  localStorage.setItem('user', payload);
};

const toggleDay = (state, index) => {
  state.ui.dayPreference.splice(index, 1, !state.ui.dayPreference[index]);
};

export default {
  [types.LOAD_NEWS_FAILURE]: loadNewsFailure,
  [types.LOAD_NEWS_SUCCESS]: loadNewsSuccess,

  [types.LOAD_SUMMARY_FAILURE]: loadSummaryFailure,
  [types.LOAD_SUMMARY_SUCCESS]: loadSummarySuccess,

  [types.LOAD_USERS_FAILURE]: loadUsersFailure,
  [types.LOAD_USERS_SUCCESS]: loadUsersSuccess,

  [types.LOAD_WEEK_PREF_FAILURE]: loadWeekPrefFailure,
  [types.LOAD_WEEK_PREF_SUCCESS]: loadWeekPrefSuccess,

  [types.NAVIGATE]: navigate,

  [types.SELECT_USER]: selectUser,

  [types.SHOW_PROFILE_SWITCHER]: showProfileSwitcher,
  [types.HIDE_PROFILE_SWITCHER]: hideProfileSwitcher,

  [types.SHOW_WHATS_NEW]: showWhatsNew,
  [types.HIDE_WHATS_NEW]: hideWhatsNew,

  [types.HIDE_TOAST]: hideToast,
  [types.SHOW_TOAST]: showToast,

  [types.LOAD_CURRENT_USER]: loadCurrentUser,

  [types.SWITCH_CURRENT_USER]: switchCurrentUser,

  [types.TOGGLE_DAY]: toggleDay,
};
