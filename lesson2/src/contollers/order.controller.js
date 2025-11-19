
module.exports.orders= async(req, res)=>{
    const con = req.body;
    const user_id = req.params.userId
    const prod_id = req.params.idProd

    try{
        const newConn = {
            user_id: user_id,
            prod_id : prod_id,
            prod_name: prod_name,
            prod_nbr: prod_nbr,
            prod_price: prod_price
        }
        const o = Order(newConn)
        email.o.save()

        return res.send("commande accepter")
    }catch(error){
        console.log(error)
    }
}
module.exports.renOrder=async(req, res) => {
    const idComm = params.idComm
    try{
        Order.finByAndDelete(idComm).then(()=>{
            return res.send('suppression avec succes')
        })
    }
    catch(error){
        console.log(error)
    }
}