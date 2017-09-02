const app = require('./app.js')

// to add a user - subscribe
const addUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password,
        'password_confirmation': data.credentials.password
      }
    }
  })
}
// to sign in user
const logInUser = function (data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: {
      'credentials': {
        'email': data.credentials.email,
        'password': data.credentials.password
      }
    }
  })
}
// to sign out user
const logOut = function () {
  return $.ajax({
    url: app.host + '/sign_out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}
// to change password
const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change_password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}
// get post
const getPost = function (data) {
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    data
  })
}
// delete a post
// const deletePost = function () {
//   return $.ajax({
//     url: app.host + '/delete/' + app.data,
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//     method: 'DELETE'
//   })
// }

module.exports = {
  addUser,
  logInUser,
  logOut,
  changePassword,
  getPost,
  // deletePost
}
