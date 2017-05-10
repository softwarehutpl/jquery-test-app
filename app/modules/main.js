import Vue from "vue";
import store from './store';
import router from './router';

var mainVue = new Vue({
  el: '#content',
  router,
  store
});
