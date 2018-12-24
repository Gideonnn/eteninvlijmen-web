import Vue from 'vue';
import Router from 'vue-router';
import moment from 'moment';

import Vote from './views/Vote.vue';
import Summary from './views/Summary.vue';
import Profile from './views/Profile/Profile.vue';

Vue.use(Router);

const addDateToQuery = (to, from, next) => {
  if (!to.query.year || !to.query.week) {
    next({ path: to.path, query: { year: moment().year(), week: moment().week() } });
  }
  next();
};

export default new Router({
  routes: [
    {
      path: '/profile/:name',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/home',
      name: 'home',
      component: Vote,
      beforeEnter: addDateToQuery,
      props: route => ({
        year: parseInt(route.query.year, 10) || moment().year(),
        week: parseInt(route.query.week, 10) || moment().week(),
      }),
    },
    {
      path: '/overzicht',
      name: 'summary',
      component: Summary,
      beforeEnter: addDateToQuery,
      props: route => ({
        year: parseInt(route.query.year, 10) || moment().year(),
        week: parseInt(route.query.week, 10) || moment().week(),
      }),
    },
    {
      path: '*',
      redirect: 'home',
    },
  ],
});
