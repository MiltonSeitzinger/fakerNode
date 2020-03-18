'use strict'
var userController = require('../controllers/controladorUsuario')

module.exports = (app) => {
  app.post('/api/adduser', userController.addUser)
  app.get('/api/users', userController.getUsers)
  app.get('/api/user/:id', userController.getUser)
  app.put('/api/user/:id', userController.modUser)
}
