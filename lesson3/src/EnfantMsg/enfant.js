import React, {useState} from 'react';
export default function Enfant({message, setMessage}){
    const messageModifier =()=>{
        setMessage("message venant de l'enfant")
    }
    return(
        <div>
        <h2>Enfant</h2>
        <p>message recu :{message}</p>
        <button onClick={messageModifier}>update</button>
        </div>
    )
}

































// export default function TaskForm({onAddTask}){
//     // const [input, setInput] = useState('')

//     const handleclick = (e) =>{
//         e.preventDefault()
//         if(input === ""){
//             alert('veiller completer les champs')
//         }else{
//             onAddTask(input)
//             setInput('')
//         }
//     }
//     return (
//         <form onSubmit={handleclick}>
//             <input type='text' placeholder='nouvelle tache' value={input} onChange={(e)=> setInput(e.target.value)}/>
//             <button type='submit'>Ajouter</button>
//         </form>
//     )
// }