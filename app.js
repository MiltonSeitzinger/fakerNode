'use strict'

const express = require('express')
var app = express()

require('./app/routes/routes')(app)

module.exports = app
