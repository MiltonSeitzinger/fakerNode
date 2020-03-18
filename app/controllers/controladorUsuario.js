'use strict'

/**
* Importamos el modelo de usuario
**/
var User = require('../models/user')

/**
* Importamos el módulo faker
**/
const faker = require('faker')
faker.locale = 'es_MX'
/**
* Definimos un controlador para los metodos para el usuario llamado controlerUser.
* Los métodos son:
* + Agregar un usuario: addUser: los datos serán agregados desde el módulo faker.
* + Mostrar todos los usuarios: showUsers.
* + Mostrar un usuario a través de su id: showUser.
* + Eliminar un usuario por su id: deleteUser.
**/
var controlerUser = {
  /**
  * Método para agregar un Usuario desde el módulo de faker.
  **/
  addUser: (req, res) => {
    var user = new User()

    user.firstLastName = faker.name.firstName() + ' ' + faker.name.lastName()
    user.phone = faker.phone.phoneNumber()
    user.address.country = faker.address.country()
    user.address.city = faker.address.city()
    user.address.streetAddress = faker.address.streetAddress()
    user.address.latitude = faker.address.latitude()
    user.address.longitude = faker.address.longitude()
    user.company.companyName = faker.company.companyName()
    user.image = faker.image.avatar()
    user.internet.avatar = faker.internet.avatar()
    user.internet.email = faker.internet.email()
    user.internet.userName = faker.internet.userName()
    user.internet.passsword = faker.internet.password()
    user.internet.webSite = faker.internet.url()
    user.save((err, saveUser) => {
      if (err) return res.status(500).send({ mensaje: 'Error al guardar el usuario' })
      if(!saveUser) return res.status(404).send({ mensaje: 'No se ha podido guardar el usuario' })
      return res.status(200).send({ mensaje: saveUser })
    })
  },
  /**
  * Método para mostrar todos los usuarios.
  **/
  getUsers: async (req, res) => {
    await User.find({}).exec((err, usuarios) => {
      if (err) return res.status(500).send({ mensaje: 'Error al buscar los usuarios' })
      if (!usuarios) return res.status(404).send({ mensaje: 'No se encontraron los usuarios' })
      return res.status(200).send({ usuarios: usuarios})
    })
  },
  /**
  * Método qu elista el usuario por su id.
  **/
  getUser: async (req, res) =>{
    await User.findById(req.params.id, (err, usuario) => {
      if (err) return res.status(500).send({ mensaje: 'Error al buscar los usuario' })
      if (!usuario) return res.status(404).send({ mensaje: 'No se encontró el usuarios' })
      return res.status(200).send({ usuario: usuario})
    })
  },
  /**
  * Modificar Usuario
  **/
  modUser: async (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    await User.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, userUpdate) => {
      if (err) return res.status(500).send({ mensaje: 'Error al actualizar el  usuario' })
      if (!userUpdate) return res.status(404).send({ mensaje: 'No se encontró el usuarios' })
      return res.status(200).send({ usuario_actualizado: userUpdate})
    })
  }
}

module.exports = controlerUser
