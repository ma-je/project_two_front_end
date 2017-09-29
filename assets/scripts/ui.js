'use strict'
const app = require('./app.js')
const blogEvents = require('./events.js')

// if successfully signed up
const onSignupSuccess = function () {
  // console.log('Welcome to my blog!')
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#sign-up input').not('.submit-button').val('')
}
// Display a message when signing up with an already taken username or bad password
const signUpFailure = function (error) {
  $('#joinError').removeClass('hidden')
  console.error(error)
  $('#sign-up input').not('.submit-button').val('')
}
// if encounter error on signup or other functions
const onError = function (data) {
  // console.log(data.responseJSON.email[0])
  $('#joinError').show()
}

// on sigin success
const onSignInSuccess = function (data) {
  // console.log('signed in')
  app.user = data.user
  // console.log(app.user)
  $('#sign-in input').not('.submit-btn').val('')
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
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').show()
  $('#get-post').show()
}
const signInFailure = function (error) {
  $('#signInError').removeClass('hidden')
  console.error(error)
}
// on sign out
const onSignOutSuccess = function (data) {
  // console.log(data)
  // console.log('signed out')
  $('#sign-out').hide()
}

// resettting/changing the password
const resetSuccess = function (data) {
  console.log(data)
  // console.log('password changed successfully')
}
const resetFailure = function (error) {
  console.log(error)
  // console.log('password changed successfully')
}
// creating posts successfully
const onPostSucess = function (data) {
  app.data = data.post
  console.log(data)
  console.log('successfully posted')
  $('#new-post input').not('.submit-button').val('')
}

// new commentSuccess
const onCommentSucess = function (data) {
  console.log('successfully submitted')
}

//  get posts
const loopPosts = function (data) {
  console.log(data)
  console.log(data.posts.length)
  $('#posts-section').empty()
  for (let i = 0; i < data.posts.length; i++) {
    $('#posts-section').append(
      '<div> ' +
      '<h2>' + data.posts[i].title + '</h2>' +
      '<p>' + data.posts[i].content + '</p>' +
      '<p>' + data.posts[i].id + '<p>' +
      '<button class="delete-post" data-id="' + data.posts[i].id + '" id="' + data.posts[i].id + '" type="button" class="btn">Delete</button>' +
      '<button class="edit-post" id="' + data.posts[i].id + '" type="button" class="btn">Edit</button>' +
      '</div>'
    )
  }
}

const getPostsSuccess = function (data) {
  app.data = data.user
  // const posts = data.posts
  $('#get-post').click(loopPosts(data))
}// edit/update posts
const editPostSuccess = function (data) {
  console.log('Post has been edited')
  console.log('you have reached ui.js update-posts')
}
// delete posts
const deletePostSuccess = function (data) {
  console.log('Post deleted')
}
module.exports = {
  onSignupSuccess,
  onSignInSuccess,
  onError,
  onSignOutSuccess,
  editPostSuccess,
  resetSuccess,
  resetFailure,
  onPostSucess,
  getPostsSuccess,
  onCommentSucess,
  deletePostSuccess,
  signInFailure,
  signUpFailure
}
