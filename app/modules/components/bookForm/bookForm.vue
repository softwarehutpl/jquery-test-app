<template>
<form class="book-form">
  <p>Tytuł:</p>
  <input class="book-form__input" type="text" v-model="book.title">
  <p>Autor:</p>
  <input class="book-form__input" type="text" v-model="book.author">
  <br/>
  <input class="book-form__checkbox" type="checkbox" v-model="book.isRented">Wypożyczona<br>
  <div v-if="validationError">{{validationError}}</div>
  <button class="book-form__button" v-on:click.prevent="submitBook">Zapisz</button>
</form>
</template>

<script>
import "./bookForm.scss";

export default {
  props: ['id'],
  data() {
    return {
      validationError: ''
    }
  },
  methods: {
    submitBook() {
      if (this.book.title && this.book.author) {
        this.$store.dispatch('saveBook', this.book);
        this.$router.push('/books');
      } else {
        this.validationError = 'Tytuł oraz autor są wymagane';
      }
    }
  },
  computed: {
    book() {
      var value = this.$store.getters.book(this.id);
      return Object.assign({}, value);
    }
  }
}
</script>
