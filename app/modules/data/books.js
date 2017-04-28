var booksData = {
  getBooks: function() {
    var books = JSON.parse(localStorage.getItem("books"));
    if (books === null) {
      books = [];
      localStorage.setItem("books", JSON.stringify(books));
    }
    return books;
  },
  addBook: function(book) {
    var books = booksData.getBooks();
    book.id = books.length;
    books[books.length] = book;
    localStorage.setItem("books", JSON.stringify(books));
  },
  editBook: function(bookId, newBookData) {
    var books = booksData.getBooks();
    if (books[bookId]) {
      newBookData.id = bookId;
      books[bookId] = newBookData;
    }
    localStorage.setItem("books", JSON.stringify(books));
  }
};
module.exports = booksData;
