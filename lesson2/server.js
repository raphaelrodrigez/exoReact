const express = require("express")
const cors = require('cors')
const mysql = require('mysql')
const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CRUDreact"
})

app.post('/create', (req, res)=>{
    console.log("Requête reçue :", req.body);
    res.json({ message: "Succès", data: req.body });
    const sql = "INSERT INTO student (`name`, `Email`) VALUES (?, ?)";
    const values = [
        req.body.name ,
        req.body.Email
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json('error')
            return res.json(data)
    })
})

app.get('*', (req, res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql,(err, data)=>{
        if(err) return res.json("error")
            return res.json(data)
    })

})
app.listen(8081, ()=>{
    console.log("listening")
})
