import Vue from "vue";
import booksList from './components/booksList/booksList.vue';
import bookForm from './components/bookForm/bookForm.vue';
import store from './store'

var mainVue = new Vue({
  el: '#content',
  store,
  components: {
    'booksList': booksList,
    'bookForm': bookForm,
  },
  methods: {
    ifUserLoggedIn() {
      var loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
      if (!loggedUser) {
        window.location.href = "login.html";
      }
    }
  },
  computed: {
    loggedUser() {
      return JSON.parse(sessionStorage.getItem('loggedUser'));
    }
  },
  mounted() {
    this.ifUserLoggedIn();
  }
});
