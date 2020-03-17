'use strict'

/**
* Importamos el modelo de usuario
**/
var User = require('../models/user')

/**
* Definimos un controlador para los metodos para el usuario llamado controlerUser.
* Los métodos son:
* + Agregar un usuario: addUser: los datos serán agregados desde el módulo faker.
* + Mostrar todos los usuarios: showUsers.
* + Mostrar un usuario a través de su id: showUser.
* + Eliminar un usuario por su id: deleteUser.  
**/
var controlerUser = {
  home: (req, res) => {
    return res.status(200).send({ msj: 'Soy la home de eña' })
  }
}
module.exports = controlerUser
