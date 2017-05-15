<template>
<div class="books-list">
  <button class="btn btn-primary float-right" v-on:click.prevent="logOut">Wyloguj</button>
  <div>
    <h1>Lista książek</h1>
    <ul class="list-group">
      <li class="list-group-item justify-content-between" v-for="book in books"><span>{{ book.title }} - {{ book.author }} - <span v-if="book.isRented">Wypożyczona</span><span v-else>Niewypożyczona</span></span>
        <router-link class="btn btn-secondary" :to="{name: 'editBook', params: {id: book.bookId}}">Edytuj</router-link>
      </li>
    </ul>
  </div>
  <router-link class="books-list__add-book btn btn-success btn-lg btn-block" :to="{name: 'addBook'}">Dodaj</router-link>
</div>
</template>

<script>
import "./booksList.scss";
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
  },
  mounted() {
    this.$store.commit('FETCH_BOOKS');
  }
}
</script>
