import Vue from "vue";
import Vuex from "vuex";
import booksData from './data/books';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: {}
  },
  mutations: {
    FETCH_BOOKS(state) {
      booksData.getBooks().then(function(result) {
        if (result) {
          state.books = result;
        }
      }, function(err) {});
    }
  },
  actions: {
    saveBook({
      commit
    }, book) {
      booksData.saveBook(book).then(function(result) {
        commit('FETCH_BOOKS');
      }, function(err) {});
    }
  },
  getters: {
    books: state => state.books,
    book: (state, getters) => (id) => {
      return getters.books[id];
    }
  }
});
