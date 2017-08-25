const blogApi = require('./api.js')
const blogApi = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

// on successful signup

const onSignupSuccess = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
}
