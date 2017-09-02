'use strict'
const app = require('./app.js')
const blogEvents = require('./events.js')

// if successfully signed up
const onSignupSuccess = function () {
  console.log('Welcome to my blog!')
}

// if encounter error on signup
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
  }
}// on sign out
const onSignOutSuccess = function (data) {
  console.log(data)
  console.log('signed out')
}
const onSignOutFail = function (error) {
  console.log(error)
  console.log('Failed, please try again')
}

// resettting password
const resetSuccess = function () {
  console.log('password changed successfully')
}
// creating posts successfully
const onPostSucess = function (data) {
  app.data = data.post
  console.log('successfully posted')
}
// if create post fails
const onPostFailure = function (error) {
  console.log(error)
}
// new commentSuccess
const onCommentSucess = function (data) {
  console.log('successfully submitted')
}

//  get post
const getPostsSuccess = function (data) {
  app.data = data.user
  // console.log(app.data)

  console.log(data)
  // console.log(app.user.post)
}
module.exports = {
  onSignupSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onSignOutFail,
  resetSuccess,
  onPostSucess,
  getPostsSuccess,
  onCommentSucess,
  onPostFailure
}
