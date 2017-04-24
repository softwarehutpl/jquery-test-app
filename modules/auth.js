require.config({
  baseUrl: 'modules',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min'
  }
});
define(['jquery', 'data/user'], function($, userData) {

  $('#login-button').on('click', function(e) {
    e.preventDefault();
    var login = $('#login').val();
    var password = $('#password').val();
    if (userData.checkLoginData(login, password)) {
      var loggedUser = {
        username: login
      };
      sessionStorage.setItem('loggedUser', JSON.stringify(loggedUser));
      window.location.href = "index.html";
    } else {
      $('#validation-error').html('Nieprawidłowy login lub hasło');
    }
  });
});
