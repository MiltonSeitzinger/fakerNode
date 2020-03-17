'use strict'
var userController = require('../controllers/controladorUsuario')

module.exports = (app) => {
  app.get('/api/', userController.home)
}
