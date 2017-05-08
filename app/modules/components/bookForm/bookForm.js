import booksData from '../../data/books';
import "./bookForm.scss";
import $ from 'jquery';

var bookForm = {
  props: ['book'],
  template: '<form id="book-form" class="book-form">' +
    '<p>Tytuł:</p>' +
    '<input id="book-title" class="book-form__input" type="text" name="title" v-model="book.title">' +
    '<p>Autor:</p>' +
    '<input id="book-author" class="book-form__input" type="text" name="author" v-model="book.author">' +
    '<br/>' +
    '<input id="book-rented" class="book-form__checkbox" type="checkbox" name="rented" v-model="book.isRented">Wypożyczona<br>' +
    '<div id="validation-error">{{validationError}}</div>' +
    '<button id="submit-book" class="book-form__button" v-on:click.prevent="submitBook">Zapisz</button>' +
    '</form>',
  data() {
    return {
      validationError: ''
    }
  },
  methods: {
    submitBook() {
      if (this.book.title !== '' && this.book.author !== '') {
        var newBookData = {
          title: this.book.title,
          author: this.book.author,
          isRented: this.book.isRented
        };
        if (this.book.bookId !== null) {
          booksData.editBook(this.book.bookId, newBookData);
        } else {
          booksData.addBook(newBookData);
        }
        this.$emit('submitBook');
      } else {
        this.validationError = 'Tytuł oraz autor są wymagane';
      }
    }
  }
}

module.exports = bookForm;
