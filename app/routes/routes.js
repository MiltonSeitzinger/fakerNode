'use strict'
var userController = require('../controllers/controladorUsuario')

module.exports = (app) => {
  app.post('/api/adduser', userController.addUser)
  app.get('/api/users', (req, res) =>{
    res.status(200).send({ users: 'Aca listaria todos los users' })
  })
}
