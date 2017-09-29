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
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}
// to change password
const resetPassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
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
/*
const editPost = function (data) {
  // console.log('you have reached api.js update-posts')
  return $.ajax({
    url: app.host + '/posts/' + data.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}
*/
const editPost = function (data) {
  console.log('edit post' + data.postId)
  return $.ajax({
    url: app.host + '/posts/' + data.postId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'post': {
        'title': data.title,
        'content': data.content
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
  resetPassword,
  createPost,
  getPost,
  editPost,
  deletePost
  // createComment
}
