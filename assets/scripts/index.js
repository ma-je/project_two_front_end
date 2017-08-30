'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const blogEvents = require('./events.js')
$(document).ready(function () {
  $('#change-password').hide()
  $('#new-post').hide()
  $('#sign-out').hide()
  $('#sign-up').on('submit', blogEvents.onSignup)
  $('#sign-in').on('submit', blogEvents.onSignIn)
  $('#sign-out').on('submit', blogEvents.onSignOut)
  $('#change-password').on('submit', blogEvents.onPasswordReset)
  $('#new-post').on('submit', blogEvents.onPostSuccess)
  $('#create-comment').on('submit', blogEvents.onCommentSuccess)
  $('#get-post').click(blogEvents.onGetPost)
})
