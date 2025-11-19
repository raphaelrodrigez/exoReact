const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:{
        type: String
    },
    password:{
        type: String
    },
    amail:{
        type: String
    },
    adress:{
        type: String
    },
    tel:{
        type: String
    }
})
module.exports.User=mongoose.model("User", UserSchema)