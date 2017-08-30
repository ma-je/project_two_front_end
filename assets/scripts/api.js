const app = require('./app.js')

// to add a user - /signup/subscribe
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
// to sign/log in user
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
// to sign/log out user
const logOut = function () {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'DELETE'
  })
}
// to change password
const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    method: 'PATCH',
    data
  })
}
// create
const newPost = function (data) {
  return $.ajax({
    url: app.host + '/posts/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'title': data.title,
        'content': data.content,
        'user_id': 1
      }
    }
  })
}
// new comment
const newComment = function (data) {
  return $.ajax({
    url: app.host + '/comments/',
    method: 'POST',
    data: {
      'comment': {
        'title': data.title,
        'content': data.content,
        'user_id': data.user_id,
        'post_id': data.post_id
      }
    },

    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// get posts
const getPost = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
// add in other files
const deletePost = function (data) {
  return $.ajax({
    url: app.host + 'posts' + app.post.id,
    method: 'DELETE',
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
module.exports = {
  addUser,
  logInUser,
  logOut,
  changePassword,
  newPost,
  newComment,
  getPost,
  deletePost
}
