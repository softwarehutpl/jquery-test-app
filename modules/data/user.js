define(function() {
  var loginData = {
    login: 'admin',
    password: '123'
  };
  return User = {
    checkLoginData: function(login, password) {
      return (login === loginData.login && password === loginData.password)
    }
  }
});
