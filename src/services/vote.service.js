import axios from 'axios';

const getSummary = (year, week) => axios.get(`/entries/${year}/${week}`);

const getWeekPref = (year, week, userId) => axios.get(`/entries/${year}/${week}/${userId}`);

const submitWeekPref = (year, week, userId, preferences) =>
  axios.put(`/entries/${year}/${week}/${userId}`, preferences);

export default {
  getSummary,
  getWeekPref,
  submitWeekPref,
};
