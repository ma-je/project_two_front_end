const blogApi = require('./api.js')
const blogUi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')
const app = require('./app.js')

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
// new posts

const onPostSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  console.log('made it to events page')
  blogApi.createPost(data)
    .then(blogUi.onPostSuccess)
    .catch(blogUi.onError)
}
// comments
const onCommentSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  console.log('commented successfully')
  blogApi.newComment(data)
    .then(blogUi.commentSuccess)
    .catch(blogUi.onError)
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
  const data = getFormFields(this)
  let edit_id = data.post.post_id
  console.log(data)
  event.preventDefault()
  blogApi.editPost(data)
    .then(blogUi.onEditPostsSuccess)
    .catch(blogUi.onError)
}
// delete posts

const onDeletePostSuccess = function (delete_id) {
  // let post_id = $('#postId').val()
  console.log(delete_id)
  blogApi.deletePost(delete_id)
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
  onDeletePostSuccess
  // onEditPostSuccess
}
