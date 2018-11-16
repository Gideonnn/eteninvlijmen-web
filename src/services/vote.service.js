import axios from 'axios';

const getWeekPref = (year, week, name) =>
  axios.get(`http://localhost:3000/entries?year=${year}&week=${week}&user=${name}`);

const saveWeekPref = (year, week, name, prefs) =>
  axios.post(`http://localhost:3000/entries?year=${year}&week=${week}&user=${name}`, prefs);

export default {
  getWeekPref,
  saveWeekPref,
};
