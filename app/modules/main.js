import Vue from "vue";
import booksList from './components/booksList/booksList';

var mainVue = new Vue({
  el: '#content',
  data() {
    return {
      loggedUser: null
    }
  },
  components: {
    'booksList': booksList,
  },
  methods: {
    ifUserLoggedIn() {
      this.loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
      if (!this.loggedUser) {
        window.location.href = "login.html";
      }
    }
  },
  mounted() {
    this.ifUserLoggedIn();
  }
});
