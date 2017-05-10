<template>
<div>
  <button v-on:click.prevent="logOut">Wyloguj</button>
  <router-link :to="{name: 'addBook'}">Dodaj</router-link>

  <div>
    <h1>Lista książek</h1>
    <ul>
      <li v-for="book in books">{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span>
        <router-link :to="{name: 'editBook', params: {id: book.bookId}}">Edytuj</router-link>
      </li>
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
    }
  },
  computed: {
    books() {
      return this.$store.getters.books
    }
  }
}
</script>
