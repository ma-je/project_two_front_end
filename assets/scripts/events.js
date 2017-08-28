const blogApi = require('./api.js')
const blogUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// on successful signup
const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  blogApi.addUser(data)
    .then(blogUi.onSignupSuccess) // if works
    .catch(blogUi.onError) // if doesn't work
}
// on sign_in

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  blogApi.logInUser(data)
    .then(blogUi.onSignInSuccess)
    .catch(blogUi.onError)
}

// on sign_out
const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  blogApi.logOut(data)
    .then(blogUi.onSignOutSuccess)
    .catch(blogUi.onError)
}
// reset/change password

const onPasswordReset = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  blogApi.changePassword(data)
    .then(blogUi.resetSuccess)
    .catch(blogUi.onError)
}

module.exports = {
  onSignup,
  onSignIn,
  onSignOut,
  onPasswordReset
}
