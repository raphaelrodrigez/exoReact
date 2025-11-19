import React from 'react'

export default function Panier({cards, setCards, total, confirmMsg, msg, handleDel, fermer}){
    return (
        <div>
            <h2>panier</h2>
            {cards.length === 0 ? (
                <p>panier vide</p>
            ) : 
            <ul>
                {cards.map((card)=>(
                    <li>{card.name} x {card.quantity} = {""} {card.prix * card.quantity} <button onClick={()=>handleDel(card.id)}>Supprimer</button></li>
                ))}
            </ul>
            }
            <p>total :{total} {""}$</p>
            {cards.length > 0 && 
            <button onClick={confirmMsg}>Confirmer la commande</button>
            }
            {msg && 
            <div>
                {msg}
            </div>
            }
            <button onClick={fermer}>Fermer</button>
        </div>
    )
}
// import React from 'react'
// export default function Panier({data}){
//     return(
//         <div>
//             {data && data.map((d)=>{
//                 <div>
//                     <img src={d.urlToImage} alt={d.title}/>
//                     <p>{d.title}</p>
//                     <a>{d.description}</a>
//                 </div>
//             })}
//         </div>
//     )
// }

















