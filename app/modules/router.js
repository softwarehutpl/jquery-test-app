import Vue from "vue";
import VueRouter from 'vue-router'
import booksList from './components/booksList/booksList.vue';
import bookForm from './components/bookForm/bookForm.vue';

Vue.use(VueRouter);

function requireAuth(to, from, next) {
  var loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
  if (!loggedUser) {
    window.location.href = "login.html";
  } else {
    next()
  }
}

const routes = [{
    path: '/books',
    component: booksList,
    beforeEnter: requireAuth
  },
  {
    path: '/editBook/:id',
    name: 'editBook',
    component: bookForm,
    props: true,
    beforeEnter: requireAuth
  },
  {
    path: '/addBook',
    name: 'addBook',
    component: bookForm,
    beforeEnter: requireAuth
  }
];

export default new VueRouter({
  routes
});
