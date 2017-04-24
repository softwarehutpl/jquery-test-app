require.config({
  baseUrl: 'modules',
  paths: {
    jquery: '../vendor/jquery-3.2.1.min'
  }
});
require(['jquery', 'components/booksList/booksList'], function($, booksList) {
  booksList.showBooks();
});
