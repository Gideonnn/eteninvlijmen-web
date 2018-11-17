import axios from 'axios';

const getWeekPref = (year, week, userId) =>
  axios.get(`http://localhost:3000/entries?year=${year}&week=${week}&userId=${userId}`);

const saveWeekPref = (year, week, name, prefs) =>
  axios.post(`http://localhost:3000/entries?year=${year}&week=${week}&user=${name}`, prefs);

export default {
  getWeekPref,
  saveWeekPref,
};
