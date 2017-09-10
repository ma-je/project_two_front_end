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
  console.log(app.user)
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
}
// on sign out
const onSignOutSuccess = function (data) {
  console.log(data)
  console.log('signed out')
}

// resettting/changing the password
const resetSuccess = function () {
  console.log('password changed successfully')
}
// creating posts successfully
const onPostSucess = function (data) {
  app.data = data.post
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

  for (let i = 0; i < data.posts.length; i++) {
    $('#posts-section').append(
      '<div> ' +
      '<h2>' + data.posts[i].title + '</h2>' +
      '<p>' + data.posts[i].content + '</p>' +
      '<p>' + data.posts[i].id + '<p>' +
      '<button class="delete-post" id="' + data.posts[i].id + '" type="button" class="btn">Delete</button>' +
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
}
// delete posts
const deletePostSuccess = function (data) {
  console.log('Post deleted')
}
module.exports = {
  onSignupSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  editPostSuccess,
  resetSuccess,
  onPostSucess,
  getPostsSuccess,
  onCommentSucess,
  deletePostSuccess
}
