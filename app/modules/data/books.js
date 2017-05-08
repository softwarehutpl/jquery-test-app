var booksData = {
  getBooks: function() {
    var books = JSON.parse(localStorage.getItem("books"));
    if (books === null) {
      books = [];
      localStorage.setItem("books", JSON.stringify(books));
    }
    return books;
  },
  saveBook(book) {
    var books = booksData.getBooks();
    if (book.bookId === null || book.bookId === undefined) {
      book.bookId = books.length;
    }
    books[book.bookId] = book;
    localStorage.setItem("books", JSON.stringify(books));
  }
};
module.exports = booksData;
