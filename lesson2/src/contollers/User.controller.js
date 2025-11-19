const { User } = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
module.exports.signup = async(req, res) =>{
    const i_user = req.body
    const {password}= req.body;

    const passCrypt = await bcrypt.hash(password,8)

    

    try{
        const o_user = new User({...i_user, password: passCrypt})
        o_user.save()
        return res.send("okay !!!!!")
    }
    catch(error){
        console.log(error)
    }
}
module.exports.signup=async(req, res)=>{
    const {passwprd, email} = req.body
    const i_user = await User.findOne({email})
    const passMatch = bcrypt.compare(passwprd, i_user.password)
    if(i_user && passMatch){
        const payload ={
            name: i_user.name,
            email: i_user.email,
            id: i_user.id
        }
        const token = just.sign(payload, 'PAS DECRET', {expiresIn: '24h'})
        return res.send({token})
    }
}
module.exports.upDateUser = async(req, res)=>{
    const id_user = req.params.iduser
    const i_user = req.body
    const passCrypt = await bcrypt.hash(i_user?.password, 8)
    Object.assign(i_user, {password: passCrypt})
    User.findByIdAndUpdate(id_user, {$set: {i_user}}, {new: true}). then((u)=>{
        returnres.send({u})
    })
}