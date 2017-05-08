import userData from './data/user';
import Vue from "vue";

const loginFormVue = new Vue({
  el: '#login-form',
  data() {
    return {
      login: '',
      password: '',
      validationError: '',
    }
  },
  methods: {
    logIn() {
      if (userData.checkLoginData(this.login, this.password)) {
        var loggedUser = {
          username: this.login
        };
        sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        window.location.href = "index.html";
      } else {
        this.validationError = 'Nieprawidłowy login lub hasło';
      }
    }
  }
})
