import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
   const [email, setEmail] = useState("")
   const[password, setPassword] = useState("")
   const [msg, setMsg] = useState("")
   const navigate = useNavigate()

   const handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    if("email" === name){
        setEmail(value)
    }
    if("password" === name){
        setPassword(value )
    }
    
}

    const handleSubimit = (e)=>{
        e.preventDefault()
        if(email === "" || password === ""){
            alert("completer tout les champs...!!!!")
            return
        }else{
            let getDetails = JSON.parse(localStorage.getItem("user"))
            
            getDetails.map((curValue)=>{
             let storetEmil = curValue.email
             let storePassword = curValue.password
    
             if(password === storePassword || email === storetEmil){
                alert("vos information sont correct")
                navigate('/card')
             }else{
                return setMsg("invalide username ou password")
             }
        })
        }
    }
   
    return(
        <div>
            <div>
            <form onSubmit={handleSubimit}>
            <div>
                <h3 style={{color: "red", border:" 0px solid red", padding: "15px"}}>{msg}</h3>
                <p>Login In</p>
            </div>
        <div>
            <input type='emil' placeholder='votre emil' name="email" onChange={handleChange} />
            <input type='password' placeholder='votre mot de passe' name="password" onChange={handleChange} />
            <p>vous n'avez pas encore de compte ? click  <a href='/'> Sign</a></p>
        </div>
        
        <button>Login</button>
        </form>
            </div>
        </div>
    )
}