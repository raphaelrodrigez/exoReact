// import React from "react";
// import { BrowserRouter, Routes, Route, Router, Navigate } from "react-router-dom";
// import LoginPage from './pages/LoginPage'
// import UnauthorizondPage from './pages/UnauthorizondPage'
// import AdminPage from "./pages/AdminPage";
// import UserPage from "./pages/UserPage";
// import ProtecteRoute from "./routes/protecteRoute";

// export default function App(){
//  <BrowserRouter>
//     <Router>
//         <Routes>
//             <Route path="/login" element={<LoginPage/>}/>
//             <Route path="/unauthorized" element={<UnauthorizondPage/>}/>
//             {/* Protected route */}
//             <Route path="/admin" element={
//                 <ProtecteRoute roles={['admin']}>
//                 <AdminPage/>
//                 </ProtecteRoute>
//             }></Route>
//             <Route path="/user" element={
//                 <ProtecteRoute roles={['admin', 'user']}>
//                 <UserPage/>
//                 </ProtecteRoute>
//             }></Route>
//             <Route path= "*" element ={<Navigate to ="/login"/>}/>
//         </Routes>
//     </Router>
//  </BrowserRouter>
// }

// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
// import RegisterPage from "./pages/RegisterPage";
// import UnauthorizedPage from "./pages/UnauthorizedPage";
// import AdminPage from "./pages/AdminPage";
// import UserPage from "./pages/UserPage";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import UserContext from "./context/AuthContext";

// export default function App() {
//   return (
//     <UserContext>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/unauthorized" element={<UnauthorizedPage />} />
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute roles={["admin"]}>
//                 <AdminPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/user"
//             element={
//               <ProtectedRoute roles={["admin", "user"]}>
//                 <UserPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/" element={<Navigate to="/user" />} />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </BrowserRouter>
//     </UserContext>
//   );
// }

import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import AdminPage from "./components/AdminPage";
import UserDashboard from "./components/UserDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import UnauthorizedPage from "./components/UnauthorizedPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
































// import React,{useState} from "react";
// import Modal from "./Modal";

// export default function App(){
//   const [articles, setArticles] = useState([

//     {id: 1, name: "pantallon", categorie : "Homme", prix: 12, image: null},
//     {id: 2, name: "mallon", categorie : "femme", prix: 2, image: null},
//     {id: 3, name: "jupe", categorie : "femme", prix: 12, image: null},
//     {id: 4, name: "chemise", categorie : "Homme", prix: 16, image: null},
//     {id: 5, name: "pantallon", categorie : "femme", prix: 12, image: null},
//     {id: 6, name: "t-shirt", categorie : "Homme", prix: 6, image: null}
//   ])
//   const [categories, setCategies] = useState([
//     {id: "1", name: "Homme"},
//     {id: "2", name: "Femme"},
//     {id: "3", name: "Enfant"}
//   ])
//   const [newArticle, setNewArticle] = useState({
//     id : "",
//     name: "",
//     categorie: "",
//     prix: "",
//     imageUrl : "",
//     imageFile : null
//   }
//   )
//   const [modalArticle, setModalArticle] = useState(null)
//   const [idEdite, setIdEdite] = useState(null)
//   const handleInputChange =(e)=>{
    // const {name, value, files} = e.target
    // if(name === "imageFile"){
    //   const file = files[0]
    //   setNewArticle(prev=>(
    //     {
    //       ...prev,
    //       imageFile: file,
    //       imageUrl: file ? URL.createObjectURL(file) : ''}
    //   ))
    // }else{
    //   setNewArticle(prev=>({
    //     ...prev,
    //     [name]: value
    //   }))
    // }
//   }
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//     // if(!newArticle.name || !newArticle.categorie || !newArticle.prix){
//     //   alert("veillez completer tout les champs...")
//     //   return
//     // }
//     if(idEdite){
//       setArticles(articles.map(article=>
//         article.id === idEdite ?{
//           ...article, 
//           name: newArticle.name,
//           categorie: newArticle.categorie,
//           prix: newArticle.prix,
//           image: newArticle.imageUrl || article.image
//         }: article
//       ))
//     }else{
      // setArticles([
      //   ...articles,{
      //     id: new Date().getTime(),
      //     name: newArticle.name,
      //     categorie: newArticle.categorie,
      //     image: newArticle.imageUrl,
      //     prix: newArticle.prix
      //   }
      // ])
//     }
//     setNewArticle({
//       name: "",
//       categorie: "",
//       imageFile: null,
//       imageUrl: "",
//       prix: ""
//     })
//     setIdEdite(null)
//   }

//   const handleDelete =(id)=>{
//     setArticles(articles.filter((article)=>(
//       article.id !== id
//     )))
//   }
//   const handleEdite=(article)=>{
//     setNewArticle({
//       name : article.name,
//       categorie: article.categorie, 
//       prix: article.prix,
//       imageFile: null,
//       imageUrl : article.image || '' 
//     })
//     setIdEdite(article.id)
//   }
//   const handleCancele =()=>{
//     setNewArticle("")
//     setIdEdite(null)
//   }
//   const handleView =(article)=>{
//     setModalArticle(article)
//   }

//   const handleClose =()=>{
//     setModalArticle(null)
//   }
//   return(
//     <div style={{ padding: 20 }}>
//       <h2 style={{textAlign: "center"}}>Liste des Articles</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={newArticle.name} placeholder="le nom de l'article" onChange={handleInputChange}/>
//         <select name="categorie" value={newArticle.categorie} onChange={handleInputChange}>
//           <option>Choisissez la categorie</option>
//           {categories.map((categorie)=>(
//             <option value={categorie.name}>{categorie.name}</option>
//           ))}
//         </select>
//         <input type="file" name="imageFile" onChange={handleInputChange}/>
//         {newArticle.imageUrl && (
//           <div style={{ margin: "10px 0" }}>
//             <img src={newArticle.imageUrl} accept="image/*" alt="Aperçu" style={{ width: 120 }} />
//           </div>
//         )}
//         <input type="number" name="prix" value={newArticle.prix} placeholder="votre prix" onChange={handleInputChange} />
//         <button type="submit">
//           {idEdite ? 'Modifier' : 'Ajouter'}
//           </button>
//         {idEdite && (
//           <button onClick={handleCancele}>Annuler</button>
//         )}
//       </form>
//       <table border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>categorie</th>
//             <th>Prix</th>
//             <th>Image</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {articles.map((article)=>(
//             <tr>
//               <td>{article.id}</td>
//               <td>{article.name}</td>
//               <td>{article.categorie}</td>
//               <td>{article.prix} $</td>
//               <td >{article.image ? (
//                 <img src= {article.image} style={{width: 50, height: 50, objectFit: "cover"}} alt= {article.name}/>
//               ): <span style={{fontStyle: "italic"}}>pas d'image</span>}</td>
//               <td>
//                 <button onClick={()=>handleEdite(article)}>Modifier</button>
//                 <button onClick={()=>handleDelete(article.id)}>Supprimer</button>
//                 <button onClick={()=>handleView(article)}>view</button>
//               </td>
//           </tr>
//           ))}
//         </tbody>
//       </table>
//       {modalArticle && (
//         <Modal article={modalArticle} onClose={handleClose}/>
//       )}
//     </div>
//   )
// }

















































// import React, { useState } from "react";
// import Modal from "./Modal";

// export default function App() {
//   const [articles, setArticles] = useState([
//     { id: 1, name: "pantallon", categorie: "homme", image: null,prix: 23 },
//     { id: 2, name: "chemise", categorie: "femme", image: null,prix: 12 },
//     { id: 3, name: "pantallon", categorie: "femme", image: null,prix: 33 },
//     { id: 4, name: "jube", categorie: "enfant", image: null,prix: 13 },
//     { id: 5, name: "soulier", categorie: "homme", image: null,prix: 20 },
//   ]);

//   // État pour le nouvel article
//   const [newArticle, setNewArticle] = useState({
//     name: "",
//     categorie: "",
//     imageFile: null,
//     imageUrl: "",
//     prix: ""
//   });

//   const [categories] = useState([
//     { id: "1", name: "homme" },
//     { id: "2", name: "femme" },
//     { id: "3", name: "enfant" },
//   ]);

//   const [idEdit, setIdEdit] = useState(null);
//   const [modalArticle, setModalArticle] = useState(null);

//   // Gérer le changement dans les champs du formulaire
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
    
//     if (name === "imageFile") {
//       const file = files[0];
//       setNewArticle(prev => ({
//         ...prev,
//         imageFile: file,
//         imageUrl: file ? URL.createObjectURL(file) : ''
//       }));
//     } else {
//       setNewArticle(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   // Soumettre le formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (!newArticle.name || !newArticle.categorie) {
//       alert("Veuillez remplir tous les champs obligatoires !");
//       return;
//     }

//     if (idEdit) {
//       // Mode édition
//       setArticles(articles.map(article =>
//         article.id === idEdit
//           ? {
//               ...article,
//               name: newArticle.name,
//               categorie: newArticle.categorie,
//               image: newArticle.imageUrl || article.image,
//               prix: newArticle.prix
//             }
//           : article
//       ));
//     } else {
//       setArticles([
//         ...articles,
//         {
//           id: new Date().getTime(),
//           name: newArticle.name,
//           categorie: newArticle.categorie,
//           image: newArticle.imageUrl,
//           prix: newArticle.prix
//         }
//       ]);
//     }

//     // Réinitialiser le formulaire
//     setNewArticle({
//       name: "",
//       categorie: "",
//       imageFile: null,
//       imageUrl: "",
//       prix: ""
//     });
//     setIdEdit(null);
//   };

//   const handleDelete = (id) => {
//     setArticles(articles.filter((article) => article.id !== id));
//   };

//   const handleEdit = (article) => {
//     setNewArticle({
//       name: article.name,
//       categorie: article.categorie,
//       imageFile: null,
//       imageUrl: article.image || "",
//       prix: article.prix

//     });
//     setIdEdit(article.id);
//   };

//   const handleCancel = () => {
//     setNewArticle({
//       name: "",
//       categorie: "",
//       imageFile: null,
//       imageUrl: "",
//       prix: "",

//     });
//     setIdEdit(null);
//   };

//   const handleView = (article) => {
//     setModalArticle(article);
//   };

//   const handleCloseModal = () => {
//     setModalArticle(null);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2 style={{ textAlign: "center" }}>Liste des articles</h2>
//       <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
//         <input
//           type="text"
//           name="name"
//           value={newArticle.name}
//           placeholder="Le nom du produit"
//           onChange={handleInputChange}
//           style={{ marginRight: 10 }}
//         />
//         <select
//           name="categorie"
//           value={newArticle.categorie}
//           onChange={handleInputChange}
//           style={{ marginRight: 10 }}
//         >
//           <option value="">Choisissez une catégorie</option>
//           {categories.map((categorie) => (
//             <option key={categorie.id} value={categorie.name}>
//               {categorie.name}
//             </option>
//           ))}
//         </select>
//         <input
//           type="file"
//           name="imageFile"
//           accept="image/*"
//           onChange={handleInputChange}
//         />
//         {/* Afficher l'aperçu de l'image sélectionnée */}
//         {newArticle.imageUrl && (
//           <div style={{ margin: "10px 0" }}>
//             <img src={newArticle.imageUrl} alt="Aperçu" style={{ width: 120 }} />
//           </div>
//         )}
//         <input
//           type="number"
//           name="prix"
//           value={newArticle.prix}
//           placeholder="Le prix du produit"
//           onChange={handleInputChange}
//           style={{ marginRight: 10 }}
//         />
//         <button type="submit" style={{ marginRight: 10 }}>
//           {idEdit ? "Modifier" : "Ajouter"}
//         </button>
//         {idEdit && (
//           <button type="button" onClick={handleCancel}>
//             Annuler
//           </button>
//         )}
//       </form>
//       <table border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Nom</th>
//             <th>Catégorie</th>
//             <th>Image</th>
//             <th>Prix</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {articles.map((article) => (
//             <tr key={article.id}>
//               <td>{article.id}</td>
//               <td>{article.name}</td>
//               <td>{article.categorie}</td>
//               <td>
//                 {article.image ? (
//                   <img
//                     src={article.image}
//                     alt={article.name}
//                     style={{ width: 50, height: 50, objectFit: "cover" }}
//                   />
//                 ) : (
//                   <span style={{ fontStyle: "italic", color: "#888" }}>Pas d'image</span>
//                 )}
//               </td>
//               <td>{article.prix} $ </td>
//               <td>
//                 <button 
//                   type="button" 
//                   onClick={() => handleEdit(article)}
//                   style={{ marginRight: 5 }}
//                 >
//                   Modifier
//                 </button>
//                 <button 
//                   type="button" 
//                   onClick={() => handleDelete(article.id)}
//                   style={{ marginRight: 5 }}
//                 >
//                   Supprimer
//                 </button>
//                 <button 
//                   type="button" 
//                   onClick={() => handleView(article)}
//                 >
//                   Voir
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal détails */}
//       {modalArticle && 
//       <Modal article={modalArticle} onClose={handleCloseModal} />
//       }
//     </div>
//   );
// }
































// import React,{useState} from 'react'

/// export default function App(){
//   const [fruits, setFruits] = useState([
//     {id: 1, name: "orange"},
//     {id: 2, name: "cerise"},
//     {id: 3, name: "banane"},
//   ])
//   const [newFruits, setNewFruits] = useState("")
//   const [edite, setEdite] = useState(null)
//   const handleDelete=(id)=>{
//     const copie = [...fruits]
//     const copieUpdate = copie.filter(fruit=>fruit.id !== id)
//     setFruits(copieUpdate)
//     // setFruits(fruits.filter(fruit=>fruit.id !== id))
//     //si on  supprime le fruit qu'on est en train d'editer , on nnule l'edition
//     if(edite === id){
//       setEdite(null)
//       setNewFruits("")
//     }
//   }
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//     if(edite){
//       setFruits(fruits.map(fruit=>
//         fruit.id === edite ? {
//           ...fruit, name: newFruits
//         }:fruit
//       ))
//       setEdite(null)
//       setNewFruits("")
//     }else{
//       const copieState = [...fruits]
//       const id = new Date().getTime()
//       const name = newFruits
//       copieState.push({id: id, name: name})
//       setFruits(copieState)
//       setNewFruits("")
//     }
//   }
//   const handleChange=(e)=>{
//     setNewFruits(e.target.value)
//   }
//   const handleCancel =()=>{
//     setNewFruits("")
//   }
//   const handleEdite =(fruit)=>{
//     setEdite(fruit.id)
//     setNewFruits(fruit.name)
//   }
 
//   return (
//     <div>
//       <h2>Liste de fruits</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={newFruits} placeholder="nom du fruit" onChange={handleChange}/>
//         <button type="submit">
//           {edite ? "Modifier" : "Ajouter+"}</button>
//           {edite && (
//             <button type="button" onClick={handleCancel}>Annuler</button>
//           )}
//       </form>
//       <ul>
//         {fruits.map((fruit)=>
//         <li key={fruit.id}>
//           {fruit.name}
//         <button onClick={()=>handleDelete(fruit.id)}>X</button>
//         <button onClick={()=>handleEdite(fruit)}>Modifier</button></li>
//         )}
//       </ul>
//     </div>
//   )
// }







// import React, { useState } from "react";

// export default function App() {
//   const [listes, setListes] = useState([]);
//   const [newListe, setNewListe] = useState({ id: "", nom: "" });
//   const [editingId, setEditingId] = useState(null);

//   // Gérer la saisie de l'input
//   const handleChange = (e) => {
//     setNewListe ({...newListe, nom: e.target})
//   };

//   // Gérer la soumission du formulaire
//   const handleSubmit = (e) => {
//      // Reset du formulaire
//      e.preventDefault()
//      if(!setNewListe.nom){
//       alert("veiller completer tout le champs")
//       return
//      }
//      if(editingId){
//       setListes(listes.map(liste=>(
//         liste.id === editingId ?{...liste, nom: newListe.nom}:liste
//       )))
//       setEditingId(null)
//      }else{
//       setListes(...listes, {
//         id: new Date().getTime(),
//         nom: newListe.nom
//       })
//      }
//      setNewListe({nom: ""})
//   };

//   // Pour éditer un nom
//   const handleEdit = (id) => {
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Liste de nom</h2>
//         <input
//           type="text"
//           value={newListe.nom}
//           name="nom"
//           placeholder="votre titre"
//           onChange={handleChange}
//         />
//         <button type="submit">{editingId ? "Modifier" : "Ajouter"}</button>
//       </form>
//       <ul>
//         {setListes(listes.map(liste=>{
//           <li key={liste.id}>
//             <h2>{liste.nom} {liste.id}</h2>
//             <button type="button">Modifier</button> }
//           </li>
//         }))}
//       </ul>
//     </div>
//   );
// }











































// import React , {useState} from "react"

// export default function App(){
//   const [posts, setPosts] = useState([])
//   const [newPosts, setNewPosts] = useState({
//   })
//   const [editingId, setEditingId] = useState(null)
//   //modification dans le formulaire
//   const handleChange =(e)=>{
//      const { name, value, files } = e.target
//     if (name === "imageFile") {
//       const file = files[0];
//       setNewPosts(prev => ({
//         ...prev,
//         imageFile: file,
//         imageUrl: file ? URL.createObjectURL(file) : ''
//       }));
//     } else {
//       setNewPosts(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };
  
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//     if(newPosts.titre ==="" || !newPosts.imageFile || newPosts.description ==="" ){
//       alert("veiller completer tout les champs")
//       return
//     }
   
//     if(editingId){
//       setPosts(posts.map(post=>(
//         post.id === editingId ?{
//           ...post,
//           titre: newPosts.titre,
//           description: newPosts.description,
//           imageUrl : newPosts.imageUrl || post.imageUrl
//         }: post
//       )))
//       setEditingId(null)
//     }else{
//       setPosts([...posts,{
//         id: new Date().getTime(),
//         titre: newPosts.titre,
//         description: newPosts.description,
//         imageUrl: newPosts.imageUrl
//         // likes: 0
//       }])
//     }
//     setNewPosts({titre: "", imageFile: null, imageUrl: "", description: ""})
//   }
//   const handleEdit = (post) => {
//     setNewPosts({
//       titre: post.titre,
//       imageFile: null, // On ne remet pas le fichier, mais on garde l'URL
//       imageUrl: post.imageUrl,
//       description: post.description
//     });
//     setEditingId(post.id);
//   };
  
//   const handleCancel = () => {
//     setEditingId(null);
//     setNewPosts({
//       titre: "",
//       imageFile: null,
//       imageUrl: "",
//       description: ""
//     });
//   };
//   return(
//     <div>
//   <h2>mon vlog</h2>
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       value={newPosts.titre}
//       placeholder="votre titre"
//       name="titre"
//       onChange={handleChange}
//     />
//     <input
//       type="file"
//       accept="image/*"
//       name="imageFile"
//       onChange={handleChange}
//     />
//     <textarea
//       value={newPosts.description}
//       placeholder="votre description"
//       name="description"
//       onChange={handleChange}
//     />
//     <button type="submit">
//       {editingId ? "Modifier" : "Ajouter"}
//     </button>
//     {editingId && (
//       <button type="button" onClick={handleCancel}>
//         Annuler
//       </button>
//     )}
//   </form>
//   <ul>
//     {posts.map(post => (
//       <li key={post.id}>
//         <h3>{post.titre} <span style={{color: "#aaa"}}>#{post.id}</span></h3>
//         {post.imageUrl && (
//           <img src={post.imageUrl} alt={post.titre} width={550} />
//         )}
//         <p>{post.description}</p>
//         <button type="button" onClick={() => handleEdit(post)}>
//           Modifier
//         </button>
//         <button type="button" >
//           supprimer
//         </button>
//       </li>
//     ))}
//   </ul>
// </div>

//   )
// }









































// import { useState } from 'react';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({
    
//   });
//   const [editingId, setEditingId] = useState(null);

//   // Gérer le like
//   const handleLike = (id) => {
//     setPosts(
//       posts.map(post =>
//         post.id === id
//           ? { ...post, likes: (post.likes || 0) + 1 }
//           : post
//       )
//     );
//   };

//   // Gérer le changement dans les champs du formulaire
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "imageFile") {
//       const file = files[0];
//       setNewPost(prev => ({
//         ...prev,
//         imageFile: file,
//         imageUrl: file ? URL.createObjectURL(file) : ''
//       }));
//     } else {
//       setNewPost(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   // Soumettre le formulaire
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!newPost.title || !newPost.imageUrl || !newPost.description) {
//       alert("Remplissez tous les champs svp !");
//       return;
//     }

//     if (editingId) {
//       // Mode édition
//       setPosts(posts.map(post =>
//         post.id === editingId
//           ? {
//               ...post,
//               title: newPost.title,
//               description: newPost.description,
//               imageUrl: newPost.imageUrl || post.imageUrl
//             }
//           : post
//       ));
//       setEditingId(null);
//     } else {
//       // Mode ajout
//       setPosts([
//         ...posts,
//         {
//           id: Date.now(),
//           title: newPost.title,
//           imageUrl: newPost.imageUrl,
//           description: newPost.description,
//           likes: 0
//         }
//       ]);
//     }

//     setNewPost({ title: '', imageFile: null, imageUrl: '', description: '' });
//   };

//   // Pré-remplir le formulaire pour modification
//   const handleEdit = (post) => {
//     setNewPost({
//       title: post.title,
//       imageFile: null,
//       imageUrl: post.imageUrl,
//       description: post.description
//     });
//     setEditingId(post.id);
//   };

//   // Annuler la modification
//   const handleCancel = () => {
//     setNewPost({ title: '', imageFile: null, imageUrl: '', description: '' });
//     setEditingId(null);
//   };

//   return (
//     <div className="App" style={{ maxWidth: 600, margin: "auto" }}>
//       <h1>Mon Vlog Simple</h1>
      
//       <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Titre"
//           value={newPost.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="file"
//           name="imageFile"
//           accept="image/*"
//           onChange={handleInputChange}
//         />
//         {/* Afficher l'aperçu de l'image sélectionnée */}
//         {newPost.imageUrl && (
//           <div style={{ margin: "10px 0" }}>
//             <img src={newPost.imageUrl} alt="Aperçu" style={{ width: 120 }} />
//           </div>
//         )}
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={newPost.description}
//           onChange={handleInputChange}
//         />
//         <div>
//           <button type="submit">
//             {editingId ? 'Mettre à jour' : 'Ajouter'}
//           </button>
//           {editingId && (
//             <button type="button" onClick={handleCancel} style={{ marginLeft: 10 }}>
//               Annuler
//             </button>
//           )}
//         </div>
//       </form>

//       <div className="posts-container">
//         {posts.length === 0 && <p>Aucun post pour l'instant.</p>}
//         {posts.map(post => (
//           <div key={post.id} className="post" style={{ border: "1px solid #ccc", marginBottom: 15, padding: 10 }}>
//             <h2>{post.title} (ID: {post.id})</h2>
//             {post.imageUrl && (
//               <img src={post.imageUrl} alt={post.title} style={{ width: 200, display: "block", marginBottom: 10 }} />
//             )}
//             <p>{post.description}</p>
//             <p>Likes: {post.likes || 0}</p>
//             <button onClick={() => handleLike(post.id)}>
//               ❤️ Like
//             </button>
//             <button 
//               onClick={() => handleEdit(post)}
//               style={{ marginLeft: '10px' }}
//             >
//               ✏️ Modifier
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, {useState} from "react"

// export default function App(){
//   const [forms, setForm] = useState([
//     {id: 1,  name : "orange"},
//     {id: 2,  name : "citron"},
//     {id: 3,  name : "banane"},
  
//   ])
//   const [newForm, setNewForm] = useState("")
//   const [idEdit, setIdEdit] = useState(null)
 

//   const handleCancel =()=>{
//     setForm("")
//   }
//   const handleChange = (e)=>{
//     setNewForm(e.target.value)
//   }
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//     if(newForm.name ===""){
//       alert("veillez remplir le champs");
//       return
//     }
//     const id = new Date().getTime()
//     const name = newForm
//     const copieForm = [...forms, {id, name}]
//     // copieForm.push
//     setForm(copieForm)
//     setNewForm("")
//   }

//   const handleDelete =(id)=>{
//     const copie = [...forms]
//     const manipCop = copie.filter(form => form.id !== id)
//     setForm(manipCop)
//   }
//   return(
//     <div>
//       <h2>Liste de nom </h2>
//       <ul>
        
//          {forms.map(form=>
//          <li key={form.id}> {form.name}{""} <button onClick={()=>handleDelete(form.id)}>X</button></li>
//         )}
        
//       </ul>
//       <form action="submit" onSubmit={handleSubmit}>
//         <input type="text" placeholder="votre nom" value={newForm} onChange={handleChange}/>
//         <button type="submit">{idEdit ? "Modifier" : "Ajouter"
//         }</button>
//         {idEdit && (
//           <button type="button" onClick={handleCancel}>Annuler</button>
//         )}
//       </form>
//     </div>
//   )
// }