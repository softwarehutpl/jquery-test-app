var booksData = {
  getBooks: function() {
    return new Promise(function(resolve, reject) {
      var books = JSON.parse(localStorage.getItem("books"));
      if (books === null) {
        books = [];
        localStorage.setItem("books", JSON.stringify(books));
      }
      resolve(books);
    });
  },
  saveBook(book) {
    return new Promise(function(resolve, reject) {
      booksData.getBooks().then(function(result) {
        if (result) {
          var books = result;
          if (book.bookId === null || book.bookId === undefined) {
            book.bookId = books.length;
          }
          books[book.bookId] = book;
          localStorage.setItem("books", JSON.stringify(books));
          resolve('Book added');
        } else {
          reject('Unable to get books');
        }
      }, function(err) {
        reject('Unable to get books');
      });
    });
  }
};
module.exports = booksData;
