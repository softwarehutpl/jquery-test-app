require.config({
  baseUrl: 'modules',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min'
  }
});
require(['jquery', 'components/booksList/booksList'], function($, booksList) {
  var currentDate = new Date();
  var loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
  if (loggedUser) {
    booksList.showBooks();
  } else {
    window.location.href = "login.html";
  }
});
