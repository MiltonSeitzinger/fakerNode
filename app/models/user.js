'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = Schema({
  firstLastName: String,
  phone: String,
  address: {
    country: String,
    city: String,
    streetAddress: String,
    latitude: String,
    longitude: String
  },
  company: {
    companyName: String,
  },
  image: String,
  internet: {
    avatar: String,
    email: String,
    userName: String,
    passsword: String,
    webSite: String
  }
})
module.exports = mongoose.model('User', UserSchema)
