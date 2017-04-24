define(['jquery', 'components/bookForm/bookForm', 'data/books'], function($, bookForm, booksData) {
  return booksList = {
    showBooks: function() {
      //add book button
      var $addBookButton = $('<button type="button">Dodaj książkę</button>');
      $addBookButton.on('click', function(e) {
        e.preventDefault();
        bookForm.showBookForm();
      });
      $('#content').html($addBookButton);
      //books list
      $('#content').append('<h1>Lista książek</h1>');
      var $booksList = $('#content').append('<ul id="books"></ul>');
      var books = booksData.getBooks();
      for (var i = 0; i < books.length; i++) {
        booksList.appendBook(books[i], $booksList);
      }
    },
    appendBook: function(book, $container) {
      var $bookElement = $('<li></li>');
      $bookElement.append('<span>' + book.title + '</span>');
      $bookElement.append('<span>' + book.author + '</span>');
      book.isRented ? $bookElement.append('<span>Wypożyczona</span>') : $bookElement.append('<span>Niewypożyczona</span>');
      var $editButton = $bookElement.append('<button class="edit-button" type="button">Edytuj książkę</button>');
      $editButton.on('click', function(e) {
        e.preventDefault();
        bookForm.showBookForm(book);
      });
      $container.append($bookElement);
    }
  }
});
