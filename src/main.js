import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store/index';

import './registerServiceWorker';

Vue.config.productionTip = false;

moment.locale('nl');

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
