import React,{useState, useEffect} from 'react'
import axios from 'axios'
export default function(){
    const [useData, setUseData] = useState([])
    const [newUseData, setNewUseData] = useState({
        name: "",
        price: "",
        categorie: "",
        quantite: "",
        imageFile: null,
        imageUrl: ""
    })
    const CATEGORIES = [
        {id: 1, name: "HOMME"},
        {id: 2, name: "FEMME"},
        {id: 3, name: "ENFANT"}
    ]
    const [categItem, setCateItem] = useState(CATEGORIES)
    const [idEdite, setIdEdite] = useState(null)
    const fetchItems = async ()=>{
        try{
            const reponse = await axios.get("http://localhost:3002/items")
            setUseData(reponse.data)
            console.log(reponse.data)
        }catch(error){
            alert("une erreur s'est produit lors du chargement des fichiers")
            return
        }
    }
    useEffect(()=>{
        fetchItems()
    },[])
    const handleChange = (e)=>{
        const {name, value, files} = e.target
        if(name === "imageFile"){
            const file = files[0]
            setNewUseData(prev=>({
                ...prev,
                imageFile: file,
                imageUrl: file ? URL.createObjectURL(file) : ""
            }))
        }else{
            setNewUseData(prev=>({
                ...prev, [name] : value
            }))
        }
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        if(newUseData.name === "" || newUseData.price === "" || newUseData.categorie === "" || newUseData.quantite === "" || newUseData.imageFile===""){
            alert("veiller completer tout les champs...!!!")
            return
        }
        try{
           if(idEdite){
             const EditItem = {
                name: newUseData.name,
                price: newUseData.price,
                quantite: newUseData.quantite,
                categorie: newUseData.categorie,
                imageUrl: newUseData.imageUrl
            }
            await axios.put(`http://localhost:3002/items/${idEdite}`)
            setUseData(useData.filter((item)=>(
                item.id === idEdite ? EditItem : item
            )))
            alert("Modifier avec succes")
           }else{
               const newItem = {
                   id: useData.length + 1,
                   name: newUseData.name,
                   price: newUseData.price,
                   categorie: newUseData.categorie,
                   quantite: newUseData.quantite,
                   imageUrl: newUseData.imageUrl
               }
               const reponse = await axios.post("http://localhost:3002/items", newItem)
               setUseData(prev=>([
                   ...prev, reponse.data
               ]))
               alert("ajouter avec succe")
           }
        }catch(error){
            alert("une rreur s'est produit lors de chargement de fichier")
        }

    }
    const handleEdite=(item)=>{
        setIdEdite(item.id)
        setNewUseData({
            name: item.name,
            price: item.price,
            categorie: item.categorie,
            quantite: item.quantite,
            imageFile: item.imageFile,
            imageUrl: item.imageUrl
        })
    }
    return(
        <div>
            <h2>text</h2>
            <form onSubmit={handleSubmit}>
                <label>Name
                <input type="text" placeholder="votre nom" name="name" value={newUseData.name} onChange={handleChange}/>
                </label>
                 <label>Prix
                <input type="number" placeholder="votre prix" name="price" value={newUseData.price} onChange={handleChange}/>
                </label>
                 <label>categorie
                <select  name="categorie" value={newUseData.categorie} onChange={handleChange}>
                    <option>choisisez votre categorie</option>
                   {categItem.map((item)=>(
                    <option key={item.id}>{item.name}</option>
                   ))}
                </select>
                </label>
                 <label>Quantité
                <input type="number" placeholder="votre quantite" name="quantite" value={newUseData.quantite} onChange={handleChange}/>
                </label>
                <label>Image
                <input type="file" name="imageFile" onChange={handleChange}/>
                </label>
                <button type="submit"> Ajouter </button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORIES</th>
                        <th>QUANTITE</th>
                        <th>IMAGES</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {useData.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.categorie}</td>
                        <td>{item.quantite}P</td>
                        <td>{item.imageUrl 
                        ?
                        <img width={50} src={item.imageUrl} alt={item.name} />
                        :
                        <span>pas d'image</span> 
                        }</td>
                        <td>
                            <button onClick={(e)=>handleEdite(item)}>Modifier</button>
                            <button>Supprimer</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}