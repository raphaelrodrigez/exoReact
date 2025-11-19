// import React, { useState } from 'react'

// export default function Text1(){
//     const Data = [
//         {id: 1, name: 'Pantalon', categorie: 'Homme', prix: 12, image: null},
//         {id: 2, name: 'Pantalon', categorie: 'Femme', prix: 12, image: null},
//         {id: 3, name: 'Pantalon', categorie: 'Enfant', prix: 12, image: null}
//     ]
    // const Categorie = [
    //     {id: 1, name: 'Homme'},
    //     {id: 2, name: 'Femme'},
    //     {id: 3, name: 'Enfant'}
    // ]
//     const [useData, setData] = useState(Data)
//     const [useCategorie, setCategorie] = useState(Categorie)
//     const [newData, setNewData] = useState({
//         name: '',
//         categorie: '',
//         prix: '',
//         imageFile: null,
//         imageUrl: ""
//     })
//     const [idEdite, setIdEdite] = useState(null)
//     const handleDele=(id)=>{
//         const confirmDelete = window.confirm('vous etes sur de vouloir supprimer cet article ???')
//         if(confirmDelete){
//             setData(useData.filter((item)=>
//             item.id !== id
//             ))
//         }
//     }
//     const handleChange=(e)=>{
//         const {name, value, files} = e.target
//         if(name === "imageFile"){
//             const file = files[0]
//             setNewData(prev=>({
//                 ...prev,
//                 imageFile : file,
//                 imageUrl : file ? URL.createObjectURL(file) : ''
//             }))
//         }else{
//             setNewData(prev=>({
//                 ...prev,
//                 [name]:value
//             }))
//         }
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault(); // Empêche le rechargement de la page
//         if(newData.name === "" || newData.categorie === "" || newData.prix === ""){
//             alert("veillez completer tout les champs!!!...")
//             return
//         }
//         if(idEdite){
//             setData(useData.map((item)=>
//             item.id === idEdite ? {
//                 ...item,
//                 name: newData.name,
//                 categorie: newData.categorie,
//                 prix: newData.prix,
//                 image: newData.imageUrl || item.image
//             } : item
//             ))
//         }else{
//             setData((prevData) => [
//                 ...prevData,
//                 {
//                 id: useData.length + 1, // ID unique basé sur timestamp
//                 name: newData.name,
//                 categorie: newData.categorie,
//                 prix: newData.prix,
//                 image: newData.imageUrl || null, // Assurez-vous que imageUrl est bien définie
//                 },
//             ]);
//         }
//         setNewData({
//             name: '',
//             categorie: '',
//             prix: '',
//             imageFile: null,
//             imageUrl: "",
//         });
//         };
//         const handleEdite=(item)=>{
//             setIdEdite(item.id)
//                 setNewData({
//                     id: item.id,
//                     name: item.name,
//                     categorie: item.categorie,
//                     prix: item.prix,
//                     imageUrl : item.image
    
//                 })
//         }
//         const handleQuite=()=>{
//             setIdEdite(null)
//             setNewData({
//                 name: "",
//                 categorie: "",
//                 prix: "",
//                 imageFile: null,
//                 imageUrl: ""
//             })
//         }
//     return(
//         <div>
//             <form className="flex flex-col gap-5 justify-center items-center p-8 rounded-lg bg-blue-300 mt-9 max-w-md mx-auto" onSubmit={handleSubmit}>
//                 <input className='p-1 rounded-lg'  type='text' name="name" onChange={handleChange} value={newData.name} placeholder="entre le nom de l'article " />
//                 <select name='categorie' value={newData.categorie}  onChange={handleChange}>
//                     <option>choisissez la categorie</option>
//                     {useCategorie.map((item)=>
//                     <option key={item.id}>{item.name}</option>
//                 )}
//                 </select>
//                 <input className='p-1 rounded-lg' value={newData.prix} type='number' onChange={handleChange} name='prix' placeholder="entre le prix de l'article " />
//                 <input className='p-1 rounded-lg' type='file' name='imageFile' onChange={handleChange} accept='image/*' />
//                 <div>
//                     {newData.imageUrl && (
//                         <img src={newData.imageUrl} alt="Aperçu" className="w-32 h-32 object-cover mt-2 rounded" />
//                     )}
//                 </div>
//                 <button type='submit' className='bg-green-500 p-1 text-white rounded-lg'> {idEdite ? "Modifier" : "Ajouter"}</button>
//                 {idEdite && (
//                     <button onClick={handleQuite} className='bg-red-500 p-1 text-white rounded-lg '>Annuler</button>
//                 )}
//             </form>
//                 <h4 className='flex flex-col gap-5 justify-center items-center'>text</h4>
//                 <div className='flex flex-col gap-5 justify-center items-center'>
            //    <table border="1" cellPadding="10" cellSpacing="0" >
            //     <thead>
            //         <tr>
            //             <th>ID</th>
            //             <th>NOM</th>
            //             <th>CATEGORIE</th>
            //             <th>PRIX</th>
            //             <th>IMAGES</th>
            //             <th>ACTIONS</th>
            //         </tr>
            //     </thead>
            //     <tbody>
//                     {useData.map((item)=>
//                     <tr key={item.id}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.categorie}</td>
//                         <td>{item.prix}$</td>
//                         <td>{item.image ?
//                         <img  width={80} height={50} className="rounded-lg" src={item.image} alt={item.name}/>
//                         :
//                         <span>pas d'image</span>
//                     }
//                     </td>
//                         <td>
//                             <button onClick={(e)=>handleDele(item.id)} className='bg-red-500 p-1 text-white rounded-lg '>Supprimer</button>
//                             <button onClick={(e)=>handleEdite(item)} className='bg-green-500 p-1 text-white rounded-lg '>Modifier</button>
//                             <button className='bg-blue-500 p-1 text-white rounded-lg '>Detail</button>
//                         </td>
//                     </tr>
//                     )}
//                 </tbody>
//             </table>     
//          </div>
            
//         </div>
//     )
// }

import React, { useState } from 'react'

    const Data = [
        {id: 1, name: 'Pantalon', categorie: 'Homme'},
        {id: 2, name: 'Pantalon', categorie: 'Femme'},
        {id: 3, name: 'Pantalon', categorie: 'Enfant'}
    ]
    const Categorie = [
        {id: 1, name: 'Homme'},
        {id: 2, name: 'Femme'},
        {id: 3, name: 'Enfant'}
    ]
    export default function Text1(){
    const [useData, setData] = useState(Data)
    const [useCategorie, setCategorie] = useState(Categorie)
    const [newData , setNewData] = useState({
        name: "",
        categorie: "",
        prix: ""
    })
    const handleChange=(e)=>{
        const {name, value} = e.target
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // if(newData.name === "" || newData.categorie === "" ){
        //     alert("veillez completer tout les champs!!!")
        //     return 
        // }
        setData((prevData=>[
            ...prevData,{
                id: useData.length + 1,
                name: newData.nameInput,
                categorie: newData.nameSelect
            }
        ]))
        setNewData({
            name: "",
            categorie: ""
        })
    }
    return (
        <>
            <h2>titre</h2>
            <div className='flex justify-center items-center'>
                <div className='w-2/3 flex flex-col gap-4 my-14 bg-base-300 p-5 rounded-xl'>
                <div className='flex gap-4'>
                <form onSubmit={handleSubmit} className='flex w-full gap-5 '>
                    <input className='input w-full p-3 rounded-xl bg-blue-300 text-blue-900'
                    onChange={handleChange} 
                    name="nameInput" value={newData.nameInput}
                     type='text' placeholder='Ajouter une tache'/>
                     
                    <select className='select w-full p-3 rounded-xl bg-blue-300 '
                    onChange={handleChange} name="nameSelect" value={newData.nameSelect}>
                        <option>choisisez ta categorie</option>
                        {useCategorie.map((item)=>
                        <option key={item.id}>{item.name}</option>
                        )}
                    </select>
                    <button type='submit' className="bg-blue-900 p-3 rounded-xl text-white">Ajouter</button>
                    </form>
                    <div className='flex flex-col'>
                <ul className='text-white'>
                    {useData.map((item)=>
                    <li key={item.id}>{item.name}</li>
                    )}
                </ul>
                    </div>
                  </div>
                </div>
            </div>
        </>
    )
}