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
      var data = this;
      var promise = new Promise(function(resolve, reject) {
        if (userData.checkLoginData(data.login, data.password)) {
          var loggedUser = {
            username: data.login
          };
          sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
          resolve("Success");
        } else {
          reject(Error("Invalid login or password"));
        }
      });
      promise.then(function(result) {
        window.location.href = "/#books";
      }, function(err) {
        data.validationError = 'Nieprawidłowy login lub hasło';
      });
    }
  }
})
