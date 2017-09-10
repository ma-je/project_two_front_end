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
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
// to change password
const changePassword = function (data) {
  return $.ajax({
    url: app.host + '/change_password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'passwords': {
        'old': data.credentials.old,
        'new': data.credentials.new
      }
    }
  })
}
// creat posts
const createPost = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': app.user.id,
        'title': data.title,
        'content': data.content
      }
    }
  })
}
// get post
const getPost = function () {
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    headers: {
      Authorizaton: 'Token token=' + app.user.token
    }
  })
}
// edit posts
const editPost = function (title, content, id) {
  // console.log(data)
  // console.log(data.title, data.content)
  // console.log(app.user)
  // console.log('got this post', app.user.token)
  // console.log(app.user.token)
  return $.ajax({
    url: app.host + '/posts/' + id,
    method: 'PATCH',
    headers: {
      Authorizaton: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'user_id': app.user.id,
        'title': title,
        'content': content
      }
    }
  })
}

// delete a post
const deletePost = function (deleteId) {
  return $.ajax({
    url: app.host + '/posts/' + deleteId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
// create comments
// const createComment = function (data) {
//   return $.ajax({
//     url: app.host + '/comments',
//     method: 'POST',
//     headers: {
//       Authorizaton: 'Token token=' + app.user.token
//     },
//     data: {
//       'comment': {
//         'user_id': app.user.id,
//         'post_id': app.post.id,
//         'title': data.title,
//         'content': data.content
//       }
//     }
//   })
// }
module.exports = {
  addUser,
  logInUser,
  logOut,
  changePassword,
  createPost,
  getPost,
  editPost,
  deletePost
  // createComment
  // deletePost,
}
