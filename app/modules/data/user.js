var loginData = {
  login: 'admin',
  password: '123'
};

module.exports = {
  checkLoginData: function(login, password) {
    return new Promise(function(resolve, reject) {
      resolve(login === loginData.login && password === loginData.password);
    });
  }
}
