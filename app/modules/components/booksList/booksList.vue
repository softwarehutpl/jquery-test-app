<template>
<div>
  <button v-on:click.prevent="logOut">Wyloguj</button>
  <button type="button" v-on:click.prevent="updateEditedBook()">Dodaj książkę</button>
  <div>
    <h1>Lista książek</h1>
    <ul>
      <li v-for="book in books">{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span><button v-on:click.prevent="updateEditedBook(book)">Edytuj</button></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    logOut() {
      sessionStorage.removeItem('loggedUser');
      window.location.href = "login.html";
    },
    updateEditedBook(book) {
      if (book) {
        this.$store.dispatch('editEditedBook', book);
      } else {
        this.$store.dispatch('editEditedBook', {
          bookId: null,
          title: '',
          author: '',
          isRented: false,
        });
      }
      this.$store.dispatch('editShowBookForm', true);
    }
  },
  computed: {
    books() {
      return this.$store.getters.books
    }
  }
}
</script>
