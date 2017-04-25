var $ = require("jquery");
var booksData = require('data/books');

var url = require("./bookForm.html");

var bookForm = {
  showBookForm: function(book) {
    $('#content').load(url, function() {
      if (book) {
        var $bookForm = $('#book-form');
        $bookForm.find('#book-title').val(book.title);
        $bookForm.find('#book-author').val(book.author);
        $bookForm.find('#book-rented').prop('checked', book.isRented);
      }
      $('#submit-book').on('click', function(e) {
        e.preventDefault();
        if (book) {
          bookForm.submitBook(book.id);
        } else {
          bookForm.submitBook();
        }
      });
    });
  },
  submitBook: function(bookId) {
    var $bookForm = $('#book-form');
    var title = $bookForm.find('#book-title').val();
    var author = $bookForm.find('#book-author').val();
    var isRented = $bookForm.find('#book-rented').is(':checked');
    if (title !== '' && author !== '') {
      var newBookData = {
        title: title,
        author: author,
        isRented: isRented
      };
      if (typeof bookId !== 'undefined') {
        booksData.editBook(bookId, newBookData);
      } else {
        booksData.addBook(newBookData);
      }
      var booksList = require('components/booksList/booksList');
      booksList.showBooks();
    } else {
      $bookForm.find('#validation-error').html('Tytył książki oraz autor wymagany');
    }
  },
};
module.exports = bookForm;
