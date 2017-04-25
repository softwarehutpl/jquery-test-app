var loginData = {
  login: 'admin',
  password: '123'
};

module.exports = {
  checkLoginData: function(login, password) {
    return (login === loginData.login && password === loginData.password)
  }
}
