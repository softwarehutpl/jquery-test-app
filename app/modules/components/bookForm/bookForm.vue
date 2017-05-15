<template>
<form class="book-form col-12">
  <div v-if="validationError" class="alert alert-danger">{{validationError}}</div>
  <div class="form-group row">
    <label class="col-sm-2 form-control-label">Tytuł</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" v-model="book.title">
    </div>
  </div>
  <div class="form-group row">
    <label class="col-sm-2 form-control-label">Autor</label>
    <div class="col-sm-10">
      <input class="form-control" type="text" v-model="book.author">
    </div>
  </div>
  <label class="form-check-label">
    <input class="form-check-input" type="checkbox" v-model="book.isRented">
    Wypożyczona
  </label>
  <button class="book-form__button btn btn-primary float-right" v-on:click.prevent="submitBook">Zapisz</button>
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
