import userData from './data/user';
import Vue from "vue";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import "./login.scss";

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
      var data = this;
      userData.checkLoginData(data.login, data.password).then(function(result) {
        if (result) {
          var loggedUser = {
            username: data.login
          };
          sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
          window.location.href = "/#books";
        } else {
          data.validationError = 'Nieprawidłowy login lub hasło';
        }
      }, function(err) {
        data.validationError = 'Wystąpił błąd podczas logowania. Spróbuj ponownie później';
      });
    }
  }
})
