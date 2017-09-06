'use strict'
const app = require('./app.js')
const blogEvents = require('./events.js')

// if successfully signed up
const onSignupSuccess = function () {
  console.log('Welcome to my blog!')
  $('#sign-up input').not('.submit-button').val('')
}

// if encounter error on signup or other functions
const onError = function (error) {
  console.log(error)
}
// on sigin success
const onSignInSuccess = function (data) {
  console.log('signed in')
  app.user = data.user
  // console.log(app.user) // outputs user id, email, token, admin
  const admin = app.user.admin
  // console.log(admin)
  if (admin === true) {
    $('#new-post').show()
  } else {
    $('#new-post').hide()
    // $('#create-comment').show()
    // $('#create-comment').hide()
  }
}
// on sign out
const onSignOutSuccess = function (data) {
  console.log(data)
  console.log('signed out')
}
// const onSignOutFail = function (error) {
//   console.log(error)
//   console.log('Failed, please try again')
// }

// resettting/changing the password
const resetSuccess = function () {
  console.log('password changed successfully')
}
// creating posts successfully
const onPostSucess = function (data) {
  app.data = data.post
  console.log('successfully posted')
}
// if create post fails
// const onPostFailure = function (error) {
//   console.log(error)
// }
// new commentSuccess
const onCommentSucess = function (data) {
  console.log('successfully submitted')
}

//  get post

const loopPosts = function (data) {
  console.log(data.posts.length)

  for (let i = 0; i < data.posts.length; i++) {
    $('#posts-section').append(
      '<div> ' +
      '<h2>' + data.posts[i].title + '</h2>' +
      '<p>' + data.posts[i].content + '</p>' +
      '</div>'
    )
  }
}

const getPostsSuccess = function (data) {
  app.data = data.user
  // const posts = data.posts
  $('#get-post').click(loopPosts(data))

  // const onEditPostSuccess = function (data) {
  //   console.log('Post has been edited')
  // }
}
module.exports = {
  onSignupSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  // onSignOutFail,
  resetSuccess,
  onPostSucess,
  getPostsSuccess,
  onCommentSucess
  // onEditPostSuccess
  // onPostFailure
}
