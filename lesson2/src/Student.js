import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";

function Student(){
    const [students, setStudent] = useState([])
    useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err))
    },[])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to= "/create" className="btn btn-success">Ajouter +</Link>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student)=>(
                           <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.Email}</td>
                        <td>
                            <button className="btn btn-primary">Edite</button>
                            <button className="btn btn-danger ms-2">Delete</button>
                        </td>
                        </tr> 
                        ))}
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}
export default Student