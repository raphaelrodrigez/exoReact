import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Singup(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate( )
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(formData.name === "" || formData.email === "" || formData.password === ""){
            alert('veillez completer tout les champs!!!')
            return 
        }else{
            const getData = JSON.parse(localStorage.getItem('user') || "[]")
            let tableau = []
            tableau = [...getData]
            tableau.push(formData)
            localStorage.setItem("user", JSON.stringify(tableau ))
            alert("enregistrement avec succes")
            navigate('/login')
        }
         
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value

        setFormData({...formData, [name]: value})
    }
    console.log(formData)
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <p>Sign up</p>
            </div>
        <div>
            <input type='text' placeholder='votre nom' name="name" onChange={handleChange}/>
            <input type='emil' placeholder='votre emil' name="email" onChange={handleChange}/>
            <input type='password' placeholder='votre mot de passe' name="password" onChange={handleChange}/>
            <p>vous avez deja un compte, <a href='/login'> Login</a></p>
        </div>
        
        <button>Sign up</button>
        </form>
         </div>
    )
}