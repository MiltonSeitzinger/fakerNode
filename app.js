'use strict'

const express = require('express')
var bodyParser = require('body-parser');
var app = express()

require('./app/routes/routes')(app)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

module.exports = app
