<template>
<div><button type="button" v-on:click.prevent="showBookForm()">Dodaj książkę</button>
  <button v-on:click.prevent="logOut">Wyloguj</button>
  <div v-if="!showForm">
    <h1>Lista książek</h1>
    <ul>
      <li v-for="book in books">{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span><button v-on:click.prevent="showBookForm(book)">Edytuj</button></li>
    </ul>
  </div>
  <bookForm v-if="showForm" :editedBook="editedBook" v-on:submitBook="addBook"></bookForm>
</div>
</template>

<script>
import booksData from '../../data/books';
import bookForm from '../bookForm/bookForm.vue';

export default {
  data() {
    return {
      books: booksData.getBooks(),
      editedBook: {
        bookId: null,
        title: '',
        author: '',
        isRented: false,
      },
      showForm: false,
    }
  },
  components: {
    'bookForm': bookForm,
  },
  methods: {
    showBookForm(bookToEdit) {
      if (bookToEdit) {
        this.editedBook = bookToEdit;
      } else {
        this.editedBook = {
          bookId: null,
          title: '',
          author: '',
          isRented: false,
        };
      }
      this.showForm = true;
    },
    logOut() {
      sessionStorage.removeItem('loggedUser');
      window.location.href = "login.html";
    },
    addBook(book) {
      booksData.saveBook(book);
      this.showForm = false;
      this.books = booksData.getBooks();
    }
  }
}
</script>
