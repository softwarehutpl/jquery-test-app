import booksData from '../../data/books';
import "./bookForm.scss";
import $ from 'jquery';

var bookForm = {
  props: ['bookId'],
  template: '<form id="book-form" class="book-form">' +
    '<p>Tytuł:</p>' +
    '<input id="book-title" class="book-form__input" type="text" name="title" v-model="title">' +
    '<p>Autor:</p>' +
    '<input id="book-author" class="book-form__input" type="text" name="author" v-model="author">' +
    '<br/>' +
    '<input id="book-rented" class="book-form__checkbox" type="checkbox" name="rented" v-model="isRented">Wypożyczona<br>' +
    '<div id="validation-error">{{validationError}}</div>' +
    '<button id="submit-book" class="book-form__button" v-on:click="submitBook">Zapisz</button>' +
    '</form>',
  data() {
    return {
      title: '',
      author: '',
      isRented: false,
      validationError: ''
    }
  },
  methods: {
    submitBook(e) {
      e.preventDefault();
      if (this.title !== '' && this.author !== '') {
        var newBookData = {
          title: this.title,
          author: this.author,
          isRented: this.isRented
        };
        if (this.bookId !== null) {
          booksData.editBook(this.bookId, newBookData);
        } else {
          booksData.addBook(newBookData);
        }
      } else {
        this.validationError = 'Tytuł oraz autor są wymagane';
      }
    }
  }
}

module.exports = bookForm;
