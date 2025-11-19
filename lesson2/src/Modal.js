import { useState } from "react";

export default function Modale({article, onclose}){
    if(!article) return null
    return(
        <div>
            <h2>Detail de l'article</h2>
            <h3>ID : {article.id}</h3>
            <h3>le nom de l'article est : {article.name}</h3>
            {article.image && (
                <div>
                <img width={50} height={50} src={article.image} alt= {article.name}/>
                </div>
            )}
            <button onClick={onclose}>Fermer</button>
        </div>
    )
}