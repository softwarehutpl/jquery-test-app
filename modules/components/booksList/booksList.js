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
      //logaout button
      var $logoutButton = $('<button>Wyloguj</button>').appendTo('#content');
      $logoutButton.on('click', function(e) {
        e.preventDefault();
        sessionStorage.removeItem('loggedUser');
        window.location.href = "login.html";
      });
      //books list
      $('#content').append('<h1>Lista książek</h1>');
      var $booksList = $('<ul id="books"></ul>').appendTo('#content');
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
      var $editButton = $('<button class="edit-button" type="button">Edytuj książkę</button>').appendTo($bookElement);
      $editButton.on('click', function(e) {
        e.preventDefault();
        bookForm.showBookForm(book);
      });
      $container.append($bookElement);
    }
  }
});
