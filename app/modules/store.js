import Vue from "vue";
import Vuex from "vuex";
import booksData from './data/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: booksData.getBooks()
  },
  mutations: {
    UPDATE_BOOKS(state) {
      state.books = booksData.getBooks();
    }
  },
  actions: {
    saveBook({
      commit
    }, book) {
      booksData.saveBook(book);
      commit('UPDATE_BOOKS');
    }
  },
  getters: {
    books: state => state.books,
    book: (state, getters) => (id) => {
      return getters.books[id];
    }
  }
});
