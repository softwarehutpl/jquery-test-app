import $ from "jquery";
import booksList from './components/booksList/booksList';

var currentDate = new Date();
var loggedUser = JSON.parse(sessionStorage.getItem('loggedUser'));
if (loggedUser) {
  booksList.showBooks();
} else {
  window.location.href = "login.html";
}
