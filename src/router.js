import Vue from 'vue';
import Router from 'vue-router';

import Vote from './views/Vote.vue';
import Summary from './views/Summary.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Vote,
    },
    {
      path: '/overzicht',
      name: 'summary',
      component: Summary,
    },
  ],
});
