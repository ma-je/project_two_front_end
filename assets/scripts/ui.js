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
  console.log(data)
  app.user = data.user
}
// on sign out
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

module.exports = {
  onSignupSuccess,
  onError,
  onSignInSuccess,
  onSignOutSuccess,
  onSignOutFail,
  resetSuccess
}
