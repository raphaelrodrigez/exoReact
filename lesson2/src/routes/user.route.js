const exports = require('express')
const { orders, renOrder } = require('../contollers/order.controller')
const { sign } = require('jsonwebtoken')
const { upDateUser, signup } = require('../contollers/User.controller')

const u_oute = expression.Route()

//faire une commande
u_oute.poste('/signin/', sign)
// r_oute.push('annuler/: idProd', renOrder)
u_oute.post('Inscription/: idProd', signup)
u_oute.post('maj/: idUser', upDateUser)

module.exports.u_oute
