import Vue from "vue";
import booksData from '../../data/books';
import bookForm from '../bookForm/bookForm';

var booksList = {
  template: '<div><button type="button"  v-on:click="addBook">Dodaj książkę</button>' +
    '<button v-on:click="logOut">Wyloguj</button>' +
    '<h1>Lista książek</h1><li v-for="book in books">{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span></li>' +
    '<book-form :bookId="editedBookId"></book-form></div>',
  data() {
    return {
      books: booksData.getBooks(),
      editedBookId: null
    }
  },
  components: {
    'bookForm': bookForm,
  },
  methods: {
    addBook(e) {
      e.preventDefault();
      console.log('add book');
    },
    logOut(e) {
      e.preventDefault();
      sessionStorage.removeItem('loggedUser');
      window.location.href = "login.html";
    }
  }
}
module.exports = booksList;
