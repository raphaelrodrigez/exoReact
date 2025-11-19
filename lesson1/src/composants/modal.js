import React from "react";

export default function Modal({article, onClose}){
    return (
        <div>
        <h2>Detail de l'article</h2>
        <h3>l'ID de l'article est : {article.id}</h3>
        <h3>le nom de l'article est : {article.name}</h3>
        <h3>la categorie de l'article est : {article.categorie}</h3>
        <h3>le prix de l'article est : {article.prix} $</h3>
        <h2>photo de l'image</h2>
        <div>
        {article.image ? (
            <img width={100} src = {article.image} alt={article.name} />
        ):<span>pas d'image</span> 
         }
        </div>
        <button onClick={onClose}>Fermer</button>
        </div>
    )
}

