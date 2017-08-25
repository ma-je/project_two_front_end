'use strict'
const app = require('./app.js')
const blogEvents = require('.events.js')

// if successfully signed up
const onSignupSuccess = function () {
  console.log('Welcome to my blog!')
}

// if encounter error on signup
const onSignupError = function () {
  console.log('error')
}

const signInSuccess =

module.exports = {
  onSignupSuccess,
  onSignupError
}
