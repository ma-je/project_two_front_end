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
const getPost = function (data) {
  return $.ajax({
    url: app.host + '/posts/',
    method: 'GET',
    data
  })
}
// edit posts
const editPost = function (data) {
  console.log(app.user.id, data.title, data.content)
  return $.ajax({
    url: app.host + 'posts' + data.id,
    method: 'PATCH',
    headers: {
      Authorizaton: 'Token token=' + app.user.token
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

// delete a post
// const deletePost = function (deletePostId) {
//   return $.ajax({
//     url: app.host + '/posts/' + deletePostId,
//        method: 'DELETE',
//        headers: {
//          Authorization: 'Token token=' + app.user.token
//     }
//   })
// }
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
  editPost
  // createComment
  // editPost,
  // deletePost,
}
