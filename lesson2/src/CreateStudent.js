import axios from 'axios';
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateStudent(){
    const [name , setName] = useState('')
    const [Email , setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8081/create', {name, Email})
        .then(res=>{
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add student</h2>
                    <div  className='mb-2'>
                        <label >Name</label>
                        <input type="text" placeholder='Enter Name'  className='form-control' onChange={e => setName(e.target.value)}/>
                    </div>
                    <div  className='mb-2'>
                        <label >Email</label>
                        <input type="email" placeholder='Enter Email'  className='form-control' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>

            
        </div>
    )
}