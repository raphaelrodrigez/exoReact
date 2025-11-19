import React, { useState } from 'react'
import Shoping from './PaymentPage'
export default function Exercice(){
    const articles = ([
        {id: 1, name: "chaussette", categorie: "Homme", price: 12, image: null},
        {id: 2, name: "chaussette", categorie: "Homme", price: 12, image: null},
        {id: 3, name: "chaussette", categorie: "Homme", price: 12, image: null}
    ])
    const categories = ([
        {id: 1, name: "Homme"},
        {id: 2, name: "Femme"},
        {id: 3, name: "Enfant"}
    ])
    const [useArticle, setUseArtcle] = useState(articles);
    const [useCategorie, setUseCategorie] = useState(categories)
    const [useNewArticle, setUseNewArticle] = useState({
        name: "",
        price: "",
        categorie: "",
        imageUrl: "",
        imageFile: null
    })
    const [cards, setCards] = useState([])
    const [idEdite, setIdEdite] = useState("")
    const handleDelete =(id)=>{
        setUseArtcle(useArticle.filter((article)=>(
            article.id !== id
        )))
    }
    const handleChange = (e)=>{
        const {name, value, files} = e.target
        if(name === 'imageFile'){
            const file = files[0]
            setUseNewArticle((prev)=>(
                {...prev,
                    imageFile: file,
                    imageUrl : file ? URL.createObjectURL(file) : ''
                }
            ))
        }else{
            setUseNewArticle((prev)=>(
                {...prev, [name]: value}
            ))
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        if(useNewArticle.name ==="" || useNewArticle.price === "" || useNewArticle.categorie === ""){
            alert("veillez remplire tout les champs !!!")
            return
        }
        if(idEdite){
            setUseArtcle(useArticle.map((article)=>(
                article.id === idEdite ? {
                    ...article,
                    name: useNewArticle.name,
                    price: useNewArticle.price,
                    categorie: useNewArticle.categorie,
                    image: useNewArticle.imageUrl || article.image
                } : article
            )))
        }else{
            setUseArtcle([
                ...useArticle,{
                    id: new Date().getTime(),
                    name: useNewArticle.name,
                    price: useNewArticle.price,
                    categorie: useNewArticle.categorie,
                    image: useNewArticle.imageUrl
                }
            ])
        }
        setUseNewArticle({
            name: "",
            price: "",
            categorie: "",
            imageUrl: "",
            imageFile: null
        })
        setIdEdite("") 
    }
    const handleEdite =(article)=>{
        setIdEdite(article.id)
        setUseNewArticle({
            name: article.name,
            price: article.price,
            categorie: article.categorie,
            imageFile: null,
            imageUrl: article.image
        })
    }
    const handleAnnuler =()=>{
        setIdEdite("")
        setUseNewArticle({
            name: "",
            price: "",
            categorie: "",
            imageFile: null,
            imageUrl: ""
        })
    }
    const handlePanier =(article)=>{
        const found = cards.find((card)=>(
            card.id === article.id
        ))
        if(found){
            setCards(cards.map((card)=>(
                card.id === article.id ? {
                    ...card, quantity: card.quantity + 1
                } : card
            )))
        }else{
            setCards([...cards,{...article, quantity: 1}])
        }
    }
    const handleCancel =(id)=>{
        setCards(cards.filter((card)=>(
            card.id !== id
        )))
    }
const total = cards.reduce((acc, card)=>
    acc + card.price * card.quantity, 0
)
    return (
        <div>
            <h2>Tableau de tout les articles</h2>

        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={useNewArticle.name} placeholder="Entrer le nom de l'article" onChange={handleChange}/>
            <input type='number' name='price' value={useNewArticle.price} placeholder="Entrer le prix de l'article" onChange={handleChange}/>
            <select onChange={handleChange} value={useNewArticle.categorie} name='categorie'>
                <option>Chposissez votre categorie</option>
                {useCategorie.map((categorie)=>(
                    <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
                ))}
            </select>
            <input type='file' name='imageFile' onChange={handleChange} accept ="image/*" />
            {useNewArticle.imageUrl && (
                <div>
                <img width={70} src={useNewArticle.imageUrl} alt={useNewArticle.name}/>
                </div>
            )}
            <button type="submit">
                {idEdite ? "Modifier" : "Ajouter"}
                </button>
                {idEdite && 
                <button type="button" onClick={handleAnnuler}>Annuler</button>
                }
        </form>

            <table  border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>name</th>
                        <th>prix</th>
                        <th>categorie</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {useArticle.map((article)=>(
                    <tr key={article.id}>
                        <td>{article.id}</td>
                        <td>{article.name}</td>
                        <td>{article.price} $</td>
                        <td>{article.categorie}</td>
                        <td>{article.image ? 
                        <img width={70} src= {article.image} alt={article.name}/> : <span>pas d'image</span> }</td>
                        <td>
                            <button onClick={()=>handleDelete(article.id)}>Delete</button>
                            <button onClick={()=> handleEdite(article)}>Edite</button>
                            <button onClick={()=>handlePanier(article)}>Panier</button>
                        </td>
                    </tr>

                    ))}
                </tbody>
            </table>
            <Shoping cards={cards} handleCancel={handleCancel} total={total}/>
        </div>
    )
}
