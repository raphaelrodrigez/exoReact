// import React, { useState } from 'react'
// export default function TableExo(){
//         const Data = [
//         {id: 1, name: 'Pantalon', categorie: 'Homme', quantite: 3, price: 12, image: null},
//         {id: 2, name: 'Pantalon', categorie: 'Femme', quantite: 3, price: 12, image: null},
//         {id: 3, name: 'Pantalon', categorie: 'Enfant', quantite: 3, price: 12, image: null}
//     ]
//     const Categorie = [
//         {id: 1, name: 'Homme'},
//         {id: 2, name: 'Femme'},
//         {id: 3, name: 'Enfant'}
//     ]
//     const [useData, setUseData] = useState(Data)
//     const [useCategorie, setUseCategorie] = useState(Categorie)
//     const [newUseData, setNewUseData] = useState({
//         name: "",
//         price: "",
//         categorie: "",
//         quantite: "",
//         imageUrl: "",
//         imageFile: null
//     })
//     const [idEdite, setIdEdite] = useState()

//     const handleDelete =(id)=>{
//         const confirmDelete = window.confirm("voulez vous vraiment supprimer cet element ?")
//         if(confirmDelete){
//             setUseData(useData.filter((item)=>
//                 item.id !== id
//             ))
//         }
//     }
//     const handleChange=(e)=>{
//         const {name, value, files} = e.target
//         if(name === "imageFile"){
//             const file = files[0]
//             setNewUseData(prev=>({
//                 ...prev,
//                 imageFile : file,
//                 imageUrl: file ? URL.createObjectURL(file) : ""
//             }))
//         }else{
//             setNewUseData(prev=>({
//                 ...prev,
//                 [name] : value
//             }))
//         }
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         if(idEdite){
//             setUseData(useData.map((item)=>(
//                 item.id === idEdite ? {
//                     ...item,
//                     name: newUseData.name,
//                     price: newUseData.price,
//                     categorie: newUseData.categorie,
//                     quantite: newUseData.quantite,
//                     image: newUseData.imageUrl || item.image
//                 }: item
//             )))
//         }else{
//             setUseData(prevData=>([
//                 ...prevData,{
//                 id : useData.length + 1,
//                 name: newUseData.name,
//                 price: newUseData.price,
//                 categorie: newUseData.categorie,
//                 quantite: newUseData.quantite,
//                 image: newUseData.imageUrl
//             }]))
//         }
//             setNewUseData({
//                 name: "",
//                 price: "",
//                 categorie: "",
//                 quantite: "",
//                 imageUrl: "",
//                 imageFile: null
//             })
//     }
//     const handleEdite=(item)=>{
//         setIdEdite(item.id)
//         setNewUseData({
//             name: item.name,
//             price: item.price,
//             categorie: item.ctegorie,
//             quantite: item.quantite,
//             imageUrl : item.image
//         })
//     }
//     return(
//         <div>
//             <h1 className='flex justify-center align-item-center'>Exercice de tableau</h1>

//         <form onSubmit={handleSubmit} className='flex flex-col gap-2 border-black' style={{ width: "50%", margin: "auto" }} required>
//             <label>Nom de l'article:
//                 <input type="text"  name="name"  value={newUseData.name} onChange={handleChange}  placeholder="Entrez le nom de l'article" required />
//             </label>    
//             <label>Prix de l'article:
//                 <input  type="number"  name="price" value={newUseData.price} onChange={handleChange}  placeholder="Entrez le prix de l'article" required />
//             </label>
//             <label>Categorie
//                 <select name="categorie" value={newUseData.categorie} onChange={handleChange}>
//                     <option >choisisez votre categorie</option>
//                     {useCategorie.map((item)=>(
//                         <option key={item.id}>{item.name}</option>
//                     ))}
//                 </select>
//             </label>
//             <label>Quantité:
//                 <input type="number"  name="quantite" value={newUseData.quantite} onChange={handleChange}   placeholder="Entrez la quantité" required />
//             </label>
//             <label>Image:
//                 <input type="file" name="imageFile"  accept='image/*'  onChange={handleChange} />
//             </label>
//             <div>
//                 {newUseData.imageUrl && (
//                     <div>
//                         <img width={250} src ={newUseData.imageUrl} alt={newUseData.name} />
//                     </div>
//                 )
//                         }
//             </div>
//             <button type="submit" className='bg-blue-500 p-2 text-white'>{idEdite ? "Modifier" : "Ajouter"} </button>
//             {idEdite && (
//                 <button onClick={()=>setIdEdite(null)} className='bg-red-500 p-2 text-white'>Annuler</button>
//             )}
           
//         </form>
//             <table border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Nom</th>
//                         <th>Prix</th>
//                         <th>categorie</th>
//                         <th>Quantité</th>
//                         <th>Image</th>
//                         <th>Actions</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                             {useData.map((item)=>(
//                         <tr>
//                                 <td>{item.id}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.price}</td>
//                                 <td>{item.categorie}</td>
//                                 <td>{item.quantite}</td>
//                                 <td>
//                                 {item.image ? 
//                                     <img src={item.image} alt={item.name} style={{width:"50px"}} /> : 
//                                     <span>pas d'image</span>}
//                                 </td>

//                                 <td >
//                                     <button onClick={(e)=>handleEdite(item)}  className='bg-green-500 p-2 '>Modifier</button>
//                                     <button onClick={(e)=>handleDelete(item.id)} className='bg-red-500 p-2 '>Supprimer</button>
//                                 </td>

//                         </tr>
//                             ))}
//                     </tbody>
//              </table>
//         </div>
//     )
// }
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CATEGORIES = [
  { id: 1, name: 'Homme' },
  { id: 2, name: 'Femme' },
  { id: 3, name: 'Enfant' }
];

const initialNewDataState = {
  name: "",
  price: "",
  categorie: "Homme",
  quantite: "",
  imageUrl: "",
  imageFile: null
};

export default function TableExo() {
  const [useData, setUseData] = useState([]);
  const [useCategorie] = useState(CATEGORIES);
  const [newUseData, setNewUseData] = useState(initialNewDataState);
  const [idEdite, setIdEdite] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('info'); // 'info', 'error', 'success'
  const [confirmAction, setConfirmAction] = useState(null);

  // Charger les données existantes
const fetchItems = async ()=>{
    try{
        setLoading(true)
        const reponse = await axios.get("http://localhost:3002/items")
        setUseData(reponse.data)
        console.log(reponse)
    }catch(error){
        setMessage("Erreur lors du chargement des articles.")
        setMessageType("error")

    }finally{
        setLoading(false)
        setTimeout(()=> setMessage(null), 3000)
    }
}

  useEffect(() => {
    fetchItems();
  }, []);

  // Gestion du formulaire
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageFile") {
      const file = files[0];
      setNewUseData(prev => ({
        ...prev,
        imageFile: file,
        imageUrl: file ? URL.createObjectURL(file) : ""
      }));
    } else {
      setNewUseData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!newUseData.name || !newUseData.price || !newUseData.categorie || !newUseData.quantite) {
    setMessage("Veuillez remplir tous les champs obligatoires.");
    setMessageType("error");
    setTimeout(() => setMessage(null), 3000);
    return;
  }
  setLoading(true);
  try {
    if (idEdite) {
      // Mise à jour de l'article existant
      const updatedItem = {
        id: idEdite,
        name: newUseData.name,
        categorie: newUseData.categorie,
        price: Number(newUseData.price),
        quantite: Number(newUseData.quantite),
        imageUrl: newUseData.imageUrl
      };
      await axios.put(`http://localhost:3001/items/${idEdite}`, updatedItem);
      setUseData(useData.map(item => item.id === idEdite ? updatedItem : item));
      setMessage("Article modifié avec succès.");
    } else {
      // Ajout d'un nouvel article : ne pas fixer id côté client
      const newItem = {
        id: useData.length+1,
        name: newUseData.name,
        categorie: newUseData.categorie,
        price: newUseData.price,
        quantite: newUseData.quantite,
        imageUrl: newUseData.imageUrl
      };
      const response = await axios.post("http://localhost:3001/items/", newItem);
      setUseData(prevData => [...prevData, response.data]);
      setMessage("Article ajouté avec succès.");
    }
    setMessageType("success");
    setNewUseData(initialNewDataState);
    setIdEdite(null);
  } catch (error) {
    setMessage("Erreur lors de la sauvegarde de l'article.");
    setMessageType("error"); 
  } finally {
    setLoading(false);
    setTimeout(() => setMessage(null), 3000);
  }
};

// Fonction appelée au clic sur le bouton Supprimer pour demander confirmation
const handleDeleteConfirmation = (id) => {
  const confirmDelete = window.confirm("Voulez-vous vraiment supprimer cet élément ?");
  if (confirmDelete) {
    handleDelete(id);
  }
};

// Fonction qui supprime effectivement l'article via Axios et met à jour l'état React
const handleDelete = async (id) => {
  setLoading(true);
  try {
    await axios.delete(`http://localhost:3001/items/${id}`);
    setUseData(prevData => prevData.filter(item => item.id !== id));
    setMessage("Article supprimé avec succès.");
    setMessageType("success");
  } catch (error) {
    setMessage("Erreur lors de la suppression.");
    setMessageType("error");
  } finally {
    setLoading(false);
    setTimeout(() => setMessage(null), 3000);
  }
};


  // Charge un article dans le formulaire pour édition
  const handleEdit = (item) => {
    setIdEdite(item.id);
    setNewUseData({
      name: item.name,
      price: item.price,
      categorie: item.categorie,
      quantite: item.quantite,
      imageUrl: item.imageUrl || "",
      imageFile: null
    });
  };

  // Annule l'édition
  const handleCancelEdit = () => {
    setIdEdite(null);
    setNewUseData(initialNewDataState);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {message && (
        <div className={`p-2 mb-4 text-white rounded ${messageType === "error" ? "bg-red-600" : "bg-green-600"}`}>
          {message}
        </div>
      )}

      <h1 className="text-xl font-bold mb-4">{idEdite ? "Modifier l'article" : "Ajouter un article"}</h1>

<form onSubmit={handleSubmit} className='max-w-xl mx-auto p-6 bg-white rounded-xl shadow-2xl space-y-4 mb-10'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Nom */}
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Nom de l'article:</span>
                        <input 
                            type="text" name="name" value={newUseData.name} onChange={handleChange} 
                            placeholder="T-shirt, Chaussure..." 
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 transition duration-150 focus:ring-blue-500 focus:border-blue-500"
                            disabled={loading}
                        />
                    </label> 
                    {/* Prix */}
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Prix ($):</span>
                        <input 
                            type="number" name="price" value={newUseData.price} onChange={handleChange} 
                            placeholder="Entrez le prix" min="0.01" step="0.01"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 transition duration-150 focus:ring-blue-500 focus:border-blue-500"
                            disabled={loading}
                        />
                    </label>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Catégorie */}
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Catégorie:</span>
                        <select 
                            name="categorie" value={newUseData.categorie} onChange={handleChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 transition duration-150 focus:ring-blue-500 focus:border-blue-500"
                            disabled={loading}
                        >
                            <option value="" disabled>Choisisez votre catégorie</option>
                            {useCategorie.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </label>
                    {/* Quantité */}
                    <label className="block">
                        <span className="text-sm font-medium text-gray-700">Quantité:</span>
                        <input 
                            type="number" name="quantite" value={newUseData.quantite} onChange={handleChange} 
                            placeholder="Entrez la quantité" min="1"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 transition duration-150 focus:ring-blue-500 focus:border-blue-500"
                            disabled={loading}
                        />
                    </label>
                </div>
                
                {/* Image */}
                <label className="block">
                    <span className="text-sm font-medium text-gray-700">Image:</span>
                    <input 
                        type="file" name="imageFile" accept='image/*' onChange={handleChange} 
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        disabled={loading}
                    />
                </label>
                
                {/* Prévisualisation Image */}
                {newUseData.imageUrl && (
                    <div className='mt-2'>
                        <img width={100} src={newUseData.imageUrl} alt="Prévisualisation" className="rounded-lg shadow-md" />
                    </div>
                )}
                
                {/* Boutons d'Action */}
                <div className="flex space-x-3 pt-3">
                    <button 
                        type="submit" 
                        className={`w-full py-3 text-white rounded-lg font-bold transition duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                        disabled={loading}
                    >
                        {loading ? "Chargement..." : idEdite ? "Modifier l'Article" : "Ajouter l'Article"}
                    </button>
                    {idEdite && (
                        <button 
                            type="button" 
                            onClick={handleCancelEdit} 
                            className={`w-full py-3 text-white rounded-lg font-bold transition duration-200 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'}`}
                            disabled={loading}
                        >
                            Annuler
                        </button>
                    )}
                </div>
            </form>

      {loading && !useData.length && <p className='flex item'>Chargement des articles...</p>}

      {!loading && !useData.length && <p>Aucun article à afficher.</p>}

      {useData.length > 0 && (
        <div className="overflow-x-auto max-w-6xl mx-auto shadow-2xl rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 bg-white">
                <thead className="bg-gray-100">
                    <tr>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left rounded-tl-xl">ID</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">Nom</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">Prix</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">Catégorie</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">Quantité</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Image</th>
                            <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center rounded-tr-xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
            {useData.map(item => (
             <tr key={item.id} className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.price}$</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.categorie}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.quantite}P</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover" />
                  ) : (
                    <span className="text-gray-400 text-sm">N/A</span>
                  )}
                </td>
                <td className="border px-2 py-1 space-x-2">
                  <button onClick={() => handleEdit(item)} className="bg-yellow-500 px-2 py-1 rounded text-white">
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteConfirmation(item.id)} className="bg-red-500 px-2 py-1 rounded text-white">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
}
