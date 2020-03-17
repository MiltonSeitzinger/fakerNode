'use strict'
require('dotenv').config()
var mongoose = require('mongoose')
var app = require('./app')
var port = process.env.PORT || 3000
var url = process.env.URLDB

mongoose.Promise = global.Promise
mongoose.createConnection(url, {useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => {
    console.log('Conexión con la base de datos establecida')

    app.listen(port, () =>{
      console.log('Servidor corriendo efectivamente en el puerto: ', port)
    })
  })
  .catch(err => console.log(err))
