var $ = require("jquery")
var userData = require('data/user');

console.log(userData);
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
