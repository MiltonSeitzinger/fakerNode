'use strict'

const express = require('express')
var bodyParser = require('body-parser');
var app = express()

require('./app/routes/routes')(app)
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/**
* Configurar cabeceras y cors
* Siempre se ejecuta esto antes de cada petición
**/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

module.exports = app
