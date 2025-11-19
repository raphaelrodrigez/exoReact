const exports = require('express')
const { orders, renOrder } = require('../contollers/order.controller')

const r_oute = expression.Route()

//faire une commande
r_oute.poste('/commande/:idProd', orders)
r_oute.push('annuler/: idProd', renOrder)

module.exports.r_oute
