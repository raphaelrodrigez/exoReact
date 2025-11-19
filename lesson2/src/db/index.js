const mongoose = require("mongoose")
const url = "http://"

mongoose
.connect(url,{

}).then(()=>{
    console.log("logged in database")
})
.catch((error)=>{
    comsole.log(error)

})