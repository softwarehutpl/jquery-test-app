import Vue from "vue";
import booksData from '../../data/books';
import bookForm from '../bookForm/bookForm';

var booksList = {
  template: '<div><button type="button"  v-on:click.prevent="addBook">Dodaj książkę</button>' +
    '<button v-on:click.prevent="logOut">Wyloguj</button>' +
    '<div v-if="!bookFormComponent"><h1>Lista książek</h1><li v-for="book in books">{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span><button v-on:click.prevent="editBook(book)">Edytuj</button></li></div>' +
    '<div :is="bookFormComponent" :book="editedBook" v-on:submitBook="updateBooks"></div></div>',
  data() {
    return {
      books: booksData.getBooks(),
      editedBook: {
        bookId: null,
        title: '',
        author: '',
        isRented: false,
      },
      bookFormComponent: ''
    }
  },
  components: {
    'bookForm': bookForm,
  },
  methods: {
    addBook() {
      this.editedBook = {
        bookId: null,
        title: '',
        author: '',
        isRented: false,
      };
      this.bookFormComponent = bookForm;
    },
    logOut() {
      sessionStorage.removeItem('loggedUser');
      window.location.href = "login.html";
    },
    editBook(book) {
      this.editedBook = book;
      this.bookFormComponent = bookForm;
    },
    updateBooks() {
      this.bookFormComponent = null;
      this.books = booksData.getBooks();
    }
  }
}
module.exports = booksList;
