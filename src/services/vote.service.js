import axios from 'axios';

const getSummary = (year, week) =>
  axios.get(`http://localhost:3000/entries?year=${year}&week=${week}`);

const getWeekPref = (year, week, userId) =>
  axios.get(`http://localhost:3000/entries?year=${year}&week=${week}&userId=${userId}`);

const submitWeekPref = (year, week, userId, preferences) =>
  axios.put(`http://localhost:3000/entries?year=${year}&week=${week}&userId=${userId}`, {
    preferences,
  });

export default {
  getSummary,
  getWeekPref,
  submitWeekPref,
};
