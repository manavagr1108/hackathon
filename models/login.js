const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  date:{
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Login', LoginSchema)