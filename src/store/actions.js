import types from './types';
import authService from '../services/auth.service';
import voteService from '../services/vote.service';

const loadUsers = async ({ commit }) => {
  try {
    const { data } = await authService.getUsers();
    commit(types.LOAD_USERS_SUCCESS, data);
  } catch (err) {
    commit(types.LOAD_USERS_FAILURE, err);
  }
};

const loadWeekPref = async ({ commit }, { year, week, userId }) => {
  try {
    const { data } = await voteService.getWeekPref(year, week, userId);
    commit(types.LOAD_WEEK_PREF_SUCCESS, data);
  } catch (err) {
    commit(types.LOAD_WEEK_PREF_FAILURE, err);
  }
};

const showToast = async ({ state, commit }, { type, message }) => {
  commit(types.SHOW_TOAST, { type, message });
  setTimeout(() => commit(types.HIDE_TOAST), 2000);
};

const submitWeekPref = async ({ state, dispatch, commit }, { year, week, userId }) => {
  try {
    const result = await voteService.submitWeekPref(year, week, userId, state.ui.dayPreference);
    dispatch(types.DISPLAY_TOAST, { type: 'success', message: 'Bedankt! Invullen gelukt. 🎉' });
  } catch (err) {
    dispatch(types.DISPLAY_TOAST, { type: 'error', message: 'Oeps! Er is iets misgegaan.' });
  }
};

export default {
  [types.LOAD_USERS]: loadUsers,
  [types.LOAD_WEEK_PREF]: loadWeekPref,
  [types.DISPLAY_TOAST]: showToast,
  [types.SUBMIT_WEEK_PREF]: submitWeekPref,
};
