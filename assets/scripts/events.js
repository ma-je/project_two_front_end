const blogApi = require('./api.js')
const blogUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const app = require('./app.js')

// on successful signup
const onSignup = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  if (data.credentials.password === data.credentials.password_confirmation) {
    blogApi.addUser(data)
      .then(blogUi.onSignupSuccess) // if works
      .catch(blogUi.signUpFailure) // if doesn't work
  } else {
    blogUi.signUpFailure()
  }
  // going to have some error popping saying passwords dont match
}

// on sign_in

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  blogApi.logInUser(data)
    .then(blogUi.onSignInSuccess)
    .catch(blogUi.signInFailure) // server response
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

  blogApi.resetPassword(data)
    .then(blogUi.resetSuccess)
    .catch(blogUi.onError)
}
// new posts

const onPostSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  // console.log('made it to events page')
  $('.new-post input').not('.submit-button').val('')
  blogApi.createPost(data)
    .then(blogUi.onPostSuccess)
    .catch(blogUi.onError)
}
// comments
const onCommentSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  // console.log('commented successfully')
  blogApi.newComment(data)
    .then(blogUi.commentSuccess)
    .catch(blogUi.joinError)
}
// get post
const onGetPostSuccess = function (event) {
  event.preventDefault()
  const data = app.user
  blogApi.getPost(data)
    .then(blogUi.getPostsSuccess)
    .catch(blogUi.onError)
}
// editing post
const onEditPostSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  blogApi.editPost(data)
    .then(blogUi.editPostSuccess)
    .catch(blogUi.onError)
}
// delete posts

const onDeletePostSuccess = function (event) {
  blogApi.deletePost(event.target.dataset.id)
    .then(blogUi.DeletPostSuccess)
    .catch(blogUi.onError)
}

module.exports = {
  onSignup,
  onSignIn,
  onSignOut,
  onPasswordReset,
  onPostSuccess,
  onCommentSuccess,
  onGetPostSuccess,
  onDeletePostSuccess,
  onEditPostSuccess
}
