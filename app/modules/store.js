import Vue from "vue";
import Vuex from "vuex";
import booksData from './data/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: booksData.getBooks(),
    editedBook: {
      bookId: null,
      title: '',
      author: '',
      isRented: false,
    },
    showForm: false
  },
  mutations: {
    UPDATE_BOOKS(state) {
      state.books = booksData.getBooks();
    },
    EDIT_EDITED_BOOK(state, book) {
      state.editedBook = book;
    },
    EDIT_SHOW_BOOK_FORM(state, showForm) {
      state.showForm = showForm;
    }
  },
  actions: {
    saveBook({
      commit
    }, book) {
      booksData.saveBook(book);
      commit('UPDATE_BOOKS');
      commit('EDIT_EDITED_BOOK', {
        bookId: null,
        title: '',
        author: '',
        isRented: false,
      });
    },
    editEditedBook({
      commit
    }, book) {
      commit('EDIT_EDITED_BOOK', book);
    },
    editShowBookForm({
      commit
    }, showForm) {
      commit('EDIT_SHOW_BOOK_FORM', showForm);
    }
  },
  getters: {
    books: state => state.books,
    editedBook: state => state.editedBook,
    showForm: state => state.showForm
  }
});
