import types from './types';
import authService from '../services/auth.service';
import newsService from '../services/news.service';
import profileService from '../services/profile.service';
import voteService from '../services/vote.service';

const displayToast = async ({ state, commit }, { type, message }) => {
  commit(types.SHOW_TOAST, { type, message });
  setTimeout(() => commit(types.HIDE_TOAST), 2000);
};

const loadNews = async ({ commit }) => {
  try {
    const data = newsService.getNews();
    commit(types.LOAD_NEWS_SUCCESS, data);
  } catch (err) {
    commit(types.LOAD_NEWS_FAILURE, err);
  }
};

const loadSummary = async ({ commit }, { year, week }) => {
  try {
    const { data } = await voteService.getSummary(year, week);
    commit(types.LOAD_SUMMARY_SUCCESS, data);
  } catch (err) {
    commit(types.LOAD_SUMMARY_FAILURE, err);
  }
};

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

const markNewsItemRead = async ({ dispatch }, id) => {
  newsService.markAsRead(id);
  dispatch(types.LOAD_NEWS);
};

const submitWeekPref = async ({ state, dispatch }, { year, week, userId }) => {
  try {
    const prefs = [...state.ui.dayPreference];
    await voteService.submitWeekPref(year, week, userId, prefs);
    dispatch(types.DISPLAY_TOAST, { type: 'success', message: 'Bedankt! Invullen gelukt. 🎉' });
  } catch (err) {
    dispatch(types.DISPLAY_TOAST, { type: 'error', message: 'Oeps! Er is iets misgegaan.' });
  }
};

const updateUser = async ({ commit, dispatch }, user) => {
  try {
    await profileService.updateUser(user);
    dispatch(types.LOAD_USERS);
    dispatch(types.DISPLAY_TOAST, { type: 'success', message: 'Je avatar is geüpdatet' });
    commit(types.NAVIGATE, 'home');
  } catch (err) {
    dispatch(types.DISPLAY_TOAST, { type: 'error', message: 'Oeps! Er is iets misgegaan.' });
  }
};

export default {
  [types.DISPLAY_TOAST]: displayToast,
  [types.LOAD_NEWS]: loadNews,
  [types.LOAD_SUMMARY]: loadSummary,
  [types.LOAD_USERS]: loadUsers,
  [types.LOAD_WEEK_PREF]: loadWeekPref,
  [types.MARK_NEWS_ITEM_READ]: markNewsItemRead,
  [types.SUBMIT_WEEK_PREF]: submitWeekPref,
  [types.UPDATE_USER]: updateUser,
};
