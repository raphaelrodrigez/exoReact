import React,{useState} from "react";
import App from "./App";
export default function Modal({article, onClose}){
    // if(!article) return null
    return(
        <div >
        <h2>Detail de l'article</h2>
        <h3> ID :{article.id}</h3>
        <h3> le nom de l'article : {article.name}</h3>
        <h3> la categorie : {article.categorie}</h3>
        <h3> le prix : {article.prix}</h3>
        {article.imageUrl && (
            <img src= {article.imageUrl} alt={article.name}/>
        )}
        <button onClick={onClose}>Fermer</button>
        </div>
    )
}











































// import { useState } from "react";
// import App from "./App";

// export default function Modal({article, onClose}){
//     if(!article){
//         return null
//     }
//     return (
//             <div
//               style={{
//                 position: "fixed",
//                 top: 0, left: 0, right: 0, bottom: 0,
//                 background: "rgba(0,0,0,0.5)",
//                 display: "flex", alignItems: "center", justifyContent: "center",
//                 zIndex: 1000,
//               }}
//             >
//               <div
//                 style={{
//                   background: "white",
//                   padding: 20,
//                   borderRadius: 8,
//                   minWidth: 300,
//                   maxWidth: "90%",
//                   justifyItems: "center"
//                 }}
//               >
//                 <h3>Détail de l'article</h3>
//                 <p><strong>Id:</strong> {article.id}</p>
//                 <p><strong>Nom:</strong> {article.name}</p>
//                 <p><strong>Catégorie:</strong> {article.categorie}</p>
//                 <h4>Apercu de l'image</h4>
//                 {article.image && (
//                   <img
//                     src={article.image}
//                     alt={article.name}
//                     style={{ maxWidth: "100%", maxHeight: 200, marginTop: -20 }}
//                   />
//                 )}
//                 <div >
//                   <button onClick={onClose}>Fermer</button>
//                 </div>
//               </div>
//             </div> 
//           );
//         }










































// import React, { useState } from "react";
// // Composant Modal pour afficher les détails de l'article avec image
// export default function Modal({ article, onClose }) {
//   if (!article) return null;
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0, left: 0, right: 0, bottom: 0,
//         background: "rgba(0,0,0,0.5)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         zIndex: 1000,
//       }}
//     >
//       <div
//         style={{
//           background: "white",
//           padding: 20,
//           borderRadius: 8,
//           minWidth: 300,
//           maxWidth: "90%",
//         }}
//       >
//         <h3>Détail de l'article</h3>
//         <p><strong>Id:</strong> {article.id}</p>
//         <p><strong>Nom:</strong> {article.name}</p>
//         <p><strong>Catégorie:</strong> {article.categorie}</p>
//         {article.image && (
//           <img
//             src={article.image}
//             alt={article.name}
//             style={{ maxWidth: "100%", maxHeight: 200, marginTop: 10 }}
//           />
//         )}
//         <div style={{ marginTop: 15 }}>
//           <button onClick={onClose}>Fermer</button>
//         </div>
//       </div>
//     </div>
//   );
// }