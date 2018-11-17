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

const submitWeekPref = async ({ state, commit }, { year, week, userId }) => {
  try {
    const result = await voteService.submitWeekPref(year, week, userId, state.ui.dayPreference);
    commit(types.SUBMIT_WEEK_PREF_SUCCESS, result);
  } catch (err) {
    commit(types.SUBMIT_WEEK_PREF_FAILURE, err);
  }
};

export default {
  [types.LOAD_USERS]: loadUsers,
  [types.LOAD_WEEK_PREF]: loadWeekPref,
  [types.SUBMIT_WEEK_PREF]: submitWeekPref,
};
