import React, {useState} from "react"

export default function Cards(){
    const [produits, setProduit] = useState([
        {id: 1, name: "produit1", prix: 12},
        {id: 2, name: "produit2", prix: 22},
        {id: 3, name: "produit3", prix: 19},
        {id: 4, name: "produit4", prix: 32},
        {id: 5, name: "produit5", prix: 2}
    ])
    const [cards, setCards] = useState([])
    const [msg, setMsg] = useState("")
    const handleAddCard = (produit)=>{
        const found = cards.find((card)=>(
            card.id === produit.id
        ))
        if(found){
            setCards(
                cards.map((card)=>(
                    card.id === produit.id ? {
                        ...card, quantity : card.quantity + 1
                    } : card
                ))
            )
            setMsg("")
        }else{
            setCards([...cards, {...produit, quantity : 1}])
        }
    }
    const handleDelete = (id)=>{
        setCards(cards.filter((card)=>(
            card.id !== id
        )))
    }
    const total = cards.reduce((acc, card)=>
        acc + card.prix * card.quantity, 0)
    const handleConfirmation = ()=>{
        setMsg(`
            ✔ votre commande a etait valider : prix total de ${total} ,\n votre commande sera vite traitee,\n merci pour votre confiance
            `)
            setCards([])
    }
    return (
        <div>
            <h1>Liste des articles disponible</h1>
            <ul>
                {produits.map((produit)=>(
                    <li key={produit.id}>{produit.name} {""} {produit.prix} $ <button onClick={()=> handleAddCard(produit)}>Ajouter au panier</button></li>
                ))}
            </ul>
            <h1>le panier</h1>
                {cards.length === 0 ? (
                    <p>pas d'acticle selectonner</p>
                ):
                <ul>
                    {cards.map((card)=>(
                        <li key={card.id}>{card.name} x {card.quantity} {""} = <strong>{card.prix * card.quantity}</strong> {""} <button onClick={()=>handleDelete(card.id)}>Supprimer</button></li>
                    ))}
                </ul> 
                }
                <p>Total : {total}</p>
                {cards.length > 0 && (
                   <button onClick={handleConfirmation}>Valider la commande</button>
                )}
                {msg && 
                   <div>
                       {msg}
                   </div>
                }
                <a href="/table"><button>Tableau</button></a>
        </div>
    )
}