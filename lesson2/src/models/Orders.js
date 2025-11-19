const mongoose = require('mongoose')

const OrderChema = mongoose.Schema({
    id_user : {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    date:{
        type: String,
        default: Date.now()
    },
    id_prod:{
        type: mongoose.Types.ObjectId,
        ref: "Prod"
    },
    price:{
        type: String
    },
 
})

module.exports.Order = mongoose.model('Order', OrderChema)