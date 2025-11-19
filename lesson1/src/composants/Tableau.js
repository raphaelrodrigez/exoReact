// import React, { useState, useEffect } from "react"
// import Modal from "./modal"
// import Panier from "./Panier"

// // import { useEffect, useState } from "react"

// export default function Tableau (){
//     const useData = [
//         {
//             id: 1, name: "pantallon", prix: 12, categorie: "homme", image: null
//         },
//         {
//             id: 2, name: "jupe", prix: 22, categorie: "femme", image: null
//         },
//         {
//             id: 3, name: "robe", prix: 10, categorie: "enfant", image: null
//         }

//     ]
//     const [articles, setArticle] = useState(useData)
//     const [categories, setCategories] = useState([
//         {id: 1, name: "Homme"},
//         {id: 2, name: "Femme"},
//         {id: 3, name: "Enfant"},
//     ])
//         const [cards, setCards] = useState([])
    
//     const [modal, setModal] = useState(null)
//     const [modalPanel, setModalPanel] = useState(null)
//     const [msg, setMsg] = useState("")
//     const [idEdite, setIdEdite] = useState(null)
//     const [newArticle, setNewArticle] = useState({
//         name: "",
//         prix: "",
//         categorie: "",
//         imageUrl : "",
//         imageFile: null
//     })
//     const handleDelete =(id)=>{
//         setArticle(articles.filter((article)=>
//             article.id !== id
//         ))
//     }
//     const handleChange =(e)=>{
//         const {name, value, files} = e.target
//         if(name === 'imageFile'){
//             const file = files[0]
//             setNewArticle((prev)=>(
//                 {
//                     ...prev, 
//                     imageFile: file,
//                     imageUrl : file ? URL.createObjectURL(file) : ''                
//                 }
//             ))
//         }else{
//             setNewArticle((prev)=>(
//                 {...prev, [name]: value}
//             ))
//         }
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         if (!newArticle.name || !newArticle.prix || !newArticle.categorie) {
//             setMsg("Veuillez remplir tous les champs obligatoires.")
//             return
//         }
//         if(idEdite){
//             setArticle(articles.map((article)=>(
//                 article.id === idEdite ? {
//                     ...article,
//                     name: newArticle.name,
//                     prix: newArticle.prix,
//                     categorie: newArticle.categorie,
//                     image: newArticle.imageUrl || article.image
//                 } : article
//             )))
//             setIdEdite(null)
//         }else{
//             setArticle([
//             ...articles ,{
//                 id: new Date().getTime(),
//                 name: newArticle.name,
//                 prix: newArticle.prix,
//                 categorie: newArticle.categorie,
//                 image: newArticle.imageUrl
//             }]
//         )
//         }
        
//         setNewArticle({
//             name: "",
//             prix: "",
//             categorie: "",
//             imageFile: null,
//             imageUrl: ""
//         })
//     }
//     const handleEdite =(article)=>{
//         setIdEdite(article.id)
//         setNewArticle({
//             name: article.name,
//             prix: article.prix,
//             categorie: article.categorie,
//             imageFile: null,
//             imageUrl: article.image || ''
//         })
//     }
//     const confirmMsg=()=>{
//         setMsg(`✔ votre commande a etait envoyer , prix total est de : ${total}, merci pour votre confiance`)
//         setCards([])
//     }
//     const handleView =(article)=>{
//         setModal(article)
//     }
//     const handleClose =()=>{
//         setModal(null)
//     }
//     const handleAddCard =(article)=>{
//        const found = cards.find((card)=>(
//         card.id === article.id
//        ))
//        if(found){
//         setCards(cards.map((card)=>(
//             card.id === article.id ? {
//                 ...card, quantity: card.quantity+1
//             } : card
//         )))
//         setMsg("")
//        }else{
//         setCards([...cards,{...article, quantity: 1}])
//        }
//     }
//         const total = cards.reduce((acc, card)=>
//             acc + card.prix * card.quantity
//     , 0    )
//     const handleDel = (id)=>{
//         setCards(cards.filter((card)=>(
//             card.id !== id
//         )))
//     }
//     const fermer=()=>{
//         setModalPanel(null)
//     }
//      return (
//         <div>
//             <h2>Liste de tout les Articles</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={newArticle.name} placeholder="le nom de l'article" name = "name" onChange={handleChange}/>
//                 <input type="number" value={newArticle.prix} placeholder="Entrer le prix" name = "prix" onChange={handleChange}/>
//                 <input type="file" name = "imageFile"  onChange={handleChange}/>
//                 {newArticle.imageUrl && (
//                     <div>
//                         <img width={70} height={100} src={newArticle.imageUrl} alt={newArticle.name} />
//                     </div>
//                 )}
//                 <select  name = "categorie" value={newArticle.categorie}  onChange={handleChange}>
//                     <option>choisissez votre categorie</option>
//                 {categories.map((categorie)=>(
//                     <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
//                 ))}
//                 </select>
//                 <button type="submit">Ajouter</button>

//             </form>
//             <table  border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>name</th>
//                         <th>prix</th>
//                         <th>categorie</th>
//                         <th>Image</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {articles.map((article)=>(
//                     <tr key={article.id}>
//                         <td>{article.id}</td>
//                         <td>{article.name}</td>
//                         <td>{article.prix} $</td>
//                         <td>{article.categorie}</td>
//                         <td>{article.image ? (
//                             <img width={70}  src = {article.image} alt={article.name} />
//                         ) : <span>pas d'image</span>
//                     }</td>
//                     <td>
//                         <button onClick={()=> handleEdite(article)}>Edite</button>
//                         <button onClick={()=> handleDelete(article.id)}>Delete</button>
//                         <button onClick={()=>handleView(article)}>View</button>
//                         <button onClick={()=> handleAddCard(article)}>Add panier</button>
//                     </td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//         {modal && (
//             <Modal article={modal} onClose={handleClose}/>
//         )}
//         <Panier setCards={setCards} cards={cards} total={total} confirmMsg={confirmMsg} msg={msg} handleDel={handleDel} fermer={fermer}/>
        
//         </div>
//     )
// }

// export default function Tableau(){
//         const useData = [
//         {
//             id: 1, name: "pantallon", prix: 12, categorie: "homme", image: null
//         },
//         {  
//             id: 2, name: "jupe", prix: 22, categorie: "femme", image: null
//         },
//         {
//             id: 3, name: "robe", prix: 10, categorie: "enfant", image: null
//         }

//     ]
//     const [data, setData] = useState(useData)
//     const [categories, setCategories] = useState([
//                 {id: 1, name: "Homme"},
//                 {id: 2, name: "Femme"},
//                 {id: 3, name: "Enfant"},
//             ])
//     const [newData, setNewData] = useState({
//         name: "",
//         prix: "",
//         categorie: "",
//         imageFile: null,
//         imageUrl: ""
//     })        
//     const handleDelete =(id)=>{
//         setData(data.filter((article)=>
//             article.id !== id
//         ))
//     }
//     const handleSubmit =(e)=>{
//         e.preventDefault()
//         setData([
//             ...data,{
//                 name: newData.name,
//                 prix: newData.prix,
//                 categorie: newData.categorie,
//                 image: newData.imageUrl
//             }
//         ])
//         setNewData({
//             name: "",
//             prix: "",
//             categorie: "",
//             imageFile: null,
//             imageUrl: ""
//         })
//     }
//     const handleChange =(e)=>{
//         const {name, value, files} = e.target
//         if(name === 'imageFile'){
//             const file = files[0]
//             setNewData((prev)=>(
//                 {...prev, imageFile: file,
//                     imageUrl: file ? URL.createObjectURL(file) : '' 
//                 }
//             ))
//         }else{
//             setNewData((prev)=>(
//                 {...prev, [name]: value}
//             ))
//         }
//     }
//     return (
//         <div>
//             <h2>Liste de tout les articles</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" value={newData.name} placeholder="le nom de votre arcticle" name="name"  onChange={handleChange}/>
//                 <input type="file" name="imageFile" onChange={handleChange}/>
//                 <input type="number" value={newData.prix} placeholder="votre prix " name="prix"  onChange={handleChange}/>
//                     <select name="categorie" value={newData.categorie} onChange={handleChange}>
//                         <option>choisissez votre categorie</option>
//                         {categories.map((categorie)=>(
//                             <option key={categorie.id} value={categorie.name}>{categorie.name}</option>
//                         ))}
//                     </select>
//                     <button type="submit">Ajouter</button>
//             </form>
//              <table  border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//                  <thead>
//                      <tr>
//                          <th>Id</th>
//                          <th>name</th>
//                          <th>prix</th>
//                          <th>categorie</th>
//                          <th>Image</th>
//                          <th>Action</th>
//                      </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((d)=>(
//                         <tr key={d.id}>
//                             <td>{d.id}</td>
//                             <td >{d.name}</td>
//                             <td>{d.prix}</td>
//                             <td>{d.categorie}</td>
//                             <td>{d.image ? 
//                             <img width={70} src = {d.image} alt={d.name}/>
//                             : <span>pas d'image</span> }</td>
//                             <td>
//                                 <button>Modifier</button>
//                                 <button onClick={()=>handleDelete(d.id)}>Supprimer</button>
//                                 <button>Detail</button>
//                                 <button>Ajouter au panier</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//                 </table>
//         </div>
//     )
// }
// // import React from "react";

// // const phrases = [
// //   {fr: "je suis venu voir mes parents", en: "i went to see my parents"},
// //   {fr: "jusqu'ici", en: "so far"}
// // ]
// // function getDate (){
// //   return phrases[Math.floor(Math.random() * phrases.length)]
// // }
// // export default function Tableau(){
// //   const [phrase, setPhrase] = useState(getDate())
// //   const [inputUser, setInputUser] = useState("")
// //   const [message, setMessage] = useState("")

// //   useEffect(()=>{
// //     const interval = setInterval(()=>{
// //       setPhrase(getDate())
// //       setInputUser("")
// //       setMessage("")
// //     }, 120000)
// //     return()=>clearInterval(interval)
// //   },[])
// //   const chechAnswer =()=>{
// //     if(inputUser.trim().toLowerCase() === phrase.en.toLowerCase()){
// //       setMessage("correct!!")
// //     }else{
// //       setMessage(`incorrect , la reponse est : ${phrase.en}`)
// //     }
// //   }
// //   return(
// //     <div>
// //       <h2>Traduit en anglait :</h2>
// //       <p>{phrase.fr}</p>
// //       <input value={inputUser} onChange={(e)=>setInputUser(e.target.value)}/> <br></br>
// //       <button onClick={chechAnswer}>Valider</button>
// //       <p>{message}</p>
// //     </div>
// //   )
// // }
// export default function Tableau(){
//   const registre = [
//     { en: "hello", fr: "bonjour" },
//     { en: "goodbye", fr: "au revoir" },
//     { en: "please", fr: "s'il vous plaît" },
//     { en: "thank you", fr: "merci" },
//     { en: "yes", fr: "oui" },
//     { en: "no", fr: "non" },
//     { en: "sorry", fr: "désolé" },
//     { en: "excuse me", fr: "excusez-moi" },
//     { en: "how are you", fr: "comment ça va" },
//     { en: "I’m fine", fr: "je vais bien" },
//     { en: "what’s your name", fr: "comment tu t’appelles" },
//     { en: "my name is", fr: "je m’appelle" },
//     { en: "where are you from", fr: "d’où viens-tu" },
//     { en: "I’m from France", fr: "je viens de France" },
//     { en: "I don’t understand", fr: "je ne comprends pas" },
//     { en: "can you help me", fr: "peux-tu m’aider" },
//     { en: "I like it", fr: "ça me plaît" },
//     { en: "I don’t like it", fr: "ça ne me plaît pas" },
//     { en: "what time is it", fr: "quelle heure est-il" },
//     { en: "where is the bathroom", fr: "où sont les toilettes" },
//     { en: "good morning", fr: "bonjour (le matin)" },
//     { en: "good night", fr: "bonne nuit" },
//     { en: "see you later", fr: "à plus tard" },
//     { en: "have a nice day", fr: "bonne journée" },
//     { en: "I’m hungry", fr: "j’ai faim" },
//     { en: "I’m thirsty", fr: "j’ai soif" },
//     { en: "I’m tired", fr: "je suis fatigué" },
//     { en: "I’m happy", fr: "je suis content" },
//     { en: "I’m sad", fr: "je suis triste" },
//     { en: "I’m busy", fr: "je suis occupé" },
//     { en: "what’s this", fr: "qu’est-ce que c’est" },
//     { en: "how much is it", fr: "combien ça coûte" },
//     { en: "I need help", fr: "j’ai besoin d’aide" },
//     { en: "call the police", fr: "appelle la police" },
//     { en: "I’m lost", fr: "je suis perdu" },
//     { en: "I love you", fr: "je t’aime" },
//     { en: "congratulations", fr: "félicitations" },
//     { en: "happy birthday", fr: "joyeux anniversaire" },
//     { en: "welcome", fr: "bienvenue" },
//     { en: "good luck", fr: "bonne chance" },
//     { en: "be careful", fr: "fais attention" },
//     { en: "I’m sorry to hear that", fr: "je suis désolé d’entendre ça" },
//     { en: "can I ask you a question", fr: "puis-je te poser une question" },
//     { en: "what do you do", fr: "que fais-tu dans la vie" },
//     { en: "I’m a student", fr: "je suis étudiant" },
//     { en: "I work in a restaurant", fr: "je travaille dans un restaurant" },
//     { en: "do you speak English", fr: "parles-tu anglais" },
//     { en: "a little", fr: "un peu" },
//     { en: "I don’t speak English well", fr: "je ne parle pas bien anglais" },
//     { en: "can you repeat please", fr: "peux-tu répéter s’il te plaît" },
//     { en: "slowly please", fr: "lentement s’il te plaît" },
//     { en: "where is the train station", fr: "où est la gare" },
//     { en: "I’m looking for the hotel", fr: "je cherche l’hôtel" },
//     { en: "what time does it open", fr: "à quelle heure ça ouvre" },
//     { en: "what time does it close", fr: "à quelle heure ça ferme" },
//     { en: "I like music", fr: "j’aime la musique" },
//     { en: "I like sports", fr: "j’aime le sport" },
//     { en: "I like reading", fr: "j’aime lire" },
//     { en: "I like traveling", fr: "j’aime voyager" },
//     { en: "family", fr: "famille" },
//     { en: "friend", fr: "ami" },
//     { en: "boyfriend", fr: "petit ami" },
//     { en: "girlfriend", fr: "petite amie" },
//     { en: "child", fr: "enfant" },
//     { en: "parents", fr: "parents" },
//     { en: "mother", fr: "mère" },
//     { en: "father", fr: "père" },
//     { en: "brother", fr: "frère" },
//     { en: "sister", fr: "sœur" },
//     { en: "son", fr: "fils" },
//     { en: "daughter", fr: "fille" },
//     { en: "uncle", fr: "oncle" },
//     { en: "aunt", fr: "tante" },
//     { en: "cousin", fr: "cousin/cousine" },
//     { en: "grandmother", fr: "grand-mère" },
//     { en: "grandfather", fr: "grand-père" },
//     { en: "nephew", fr: "neveu" },
//     { en: "niece", fr: "nièce" },
//     { en: "house", fr: "maison" },
//     { en: "apartment", fr: "appartement" },
//     { en: "room", fr: "chambre" },
//     { en: "kitchen", fr: "cuisine" },
//     { en: "bathroom", fr: "salle de bain" },
//     { en: "living room", fr: "salon" },
//     { en: "bed", fr: "lit" },
//     { en: "chair", fr: "chaise" },
//     { en: "table", fr: "table" },
//     { en: "window", fr: "fenêtre" },
//     { en: "door", fr: "porte" },
//     { en: "school", fr: "école" },
//     { en: "university", fr: "université" },
//     { en: "teacher", fr: "professeur" },
//     { en: "student", fr: "étudiant" },
//     { en: "classroom", fr: "salle de classe" },
//     { en: "lesson", fr: "leçon" },
//     { en: "exam", fr: "examen" },
//     { en: "homework", fr: "devoirs" },
//     { en: "car", fr: "voiture" },
//     { en: "bus", fr: "bus" },
//     { en: "train", fr: "train" },
//     { en: "plane", fr: "avion" },
//     { en: "bicycle", fr: "vélo" },
//     { en: "ticket", fr: "billet" },
//     { en: "map", fr: "carte" },
//     { en: "street", fr: "rue" },
//     { en: "city", fr: "ville" },
//     { en: "country", fr: "pays" },
//     { en: "shop", fr: "magasin" },
//     { en: "market", fr: "marché" },
//     { en: "restaurant", fr: "restaurant" },
//     { en: "menu", fr: "menu" },
//     { en: "breakfast", fr: "petit-déjeuner" },
//     { en: "lunch", fr: "déjeuner" },
//     { en: "dinner", fr: "dîner" },
//     { en: "water", fr: "eau" },
//     { en: "bread", fr: "pain" },
//     { en: "meat", fr: "viande" },
//     { en: "fish", fr: "poisson" },
//     { en: "fruit", fr: "fruit" },
//     { en: "vegetable", fr: "légume" },
//     { en: "shirt", fr: "chemise" },
//     { en: "pants", fr: "pantalon" },
//     { en: "dress", fr: "robe" },
//     { en: "shoes", fr: "chaussures" },
//     { en: "hat", fr: "chapeau" },
//     { en: "jacket", fr: "veste" },
//     { en: "coat", fr: "manteau" },
//     { en: "skirt", fr: "jupe" },
//     { en: "socks", fr: "chaussettes" },
//     { en: "gloves", fr: "gants" },
//     { en: "red", fr: "rouge" },
//     { en: "blue", fr: "bleu" },
//     { en: "green", fr: "vert" },
//     { en: "yellow", fr: "jaune" },
//     { en: "black", fr: "noir" },
//     { en: "white", fr: "blanc" },
//     { en: "pink", fr: "rose" },
//     { en: "orange", fr: "orange" },
//     { en: "purple", fr: "violet" },
//     { en: "brown", fr: "marron" },
//     { en: "happy", fr: "heureux" },
//     { en: "sad", fr: "triste" },
//     { en: "angry", fr: "en colère" },
//     { en: "tired", fr: "fatigué" },
//     { en: "excited", fr: "excité" },
//     { en: "nervous", fr: "nerveux" },
//     { en: "bored", fr: "ennuyé" },
//     { en: "scared", fr: "effrayé" },
//     { en: "calm", fr: "calme" },
//     { en: "love", fr: "amour" },
//     { en: "hate", fr: "haine" },
//     { en: "friendship", fr: "amitié" },
//     { en: "family", fr: "famille" },
//     { en: "work", fr: "travail" },
//     { en: "school", fr: "école" },
//     { en: "home", fr: "maison" },
//     { en: "food", fr: "nourriture" },
//     { en: "drink", fr: "boisson" },
//     { en: "coffee", fr: "café" },
//     { en: "tea", fr: "thé" },
//     { en: "juice", fr: "jus" },
//     { en: "milk", fr: "lait" },
//     { en: "beer", fr: "bière" },
//     { en: "wine", fr: "vin" },
//     { en: "sun", fr: "soleil" },
//     { en: "rain", fr: "pluie" },
//     { en: "snow", fr: "neige" },
//     { en: "wind", fr: "vent" },
//     { en: "cloud", fr: "nuage" },
//     { en: "hot", fr: "chaud" },
//     { en: "cold", fr: "froid" },
//     { en: "warm", fr: "tiède" },
//     { en: "cool", fr: "frais" },
//     { en: "day", fr: "jour" },
//     { en: "night", fr: "nuit" },
//     { en: "morning", fr: "matin" },
//     { en: "evening", fr: "soir" },
//     { en: "How are you today", fr: "Comment vas-tu aujourd’hui" },
//     { en: "I’m going to the store", fr: "Je vais au magasin" },
//     { en: "Can you help me please", fr: "Peux-tu m’aider s’il te plaît" },
//     { en: "What time is the meeting", fr: "À quelle heure est la réunion" },
//     { en: "I don’t understand the question", fr: "Je ne comprends pas la question" },
//     { en: "Where do you live", fr: "Où habites-tu" },
//     { en: "I like to listen to music", fr: "J’aime écouter de la musique" },
//     { en: "She is my best friend", fr: "Elle est ma meilleure amie" },
//     { en: "We are going to the beach tomorrow", fr: "Nous allons à la plage demain" },
//     { en: "Can I have a glass of water", fr: "Puis-je avoir un verre d’eau" },
//     { en: "I’m learning English", fr: "J’apprends l’anglais" },
//     { en: "It’s a beautiful day", fr: "C’est une belle journée" },
//     { en: "Please speak slowly", fr: "Parle lentement s’il te plaît" },
//     { en: "I’m sorry for being late", fr: "Je suis désolé d’être en retard" },
//     { en: "Do you like this movie", fr: "Aimes-tu ce film" },
//     { en: "I have two brothers and one sister", fr: "J’ai deux frères et une sœur" },
//     { en: "What do you want to eat", fr: "Que veux-tu manger" },
//     { en: "I need to buy some clothes", fr: "J’ai besoin d’acheter des vêtements" },
//     { en: "Can you show me the way", fr: "Peux-tu me montrer le chemin" },
//     { en: "I’m very happy to see you", fr: "Je suis très content de te voir" },
//     { en: "Where is the nearest bus stop", fr: "Où est l’arrêt de bus le plus proche" },
//     { en: "I would like a coffee please", fr: "Je voudrais un café s’il vous plaît" },
//     { en: "How much does this cost", fr: "Combien ça coûte" },
//     { en: "I’m looking for a hotel", fr: "Je cherche un hôtel" },
//     { en: "What is your phone number", fr: "Quel est ton numéro de téléphone" },
//     { en: "Do you have any brothers or sisters", fr: "As-tu des frères ou des sœurs" },
//     { en: "I’m feeling tired today", fr: "Je me sens fatigué aujourd’hui" },
//     { en: "Can I pay by credit card", fr: "Puis-je payer par carte bancaire" },
//     { en: "The weather is nice today", fr: "Il fait beau aujourd’hui" },
//     { en: "I don’t know the answer", fr: "Je ne connais pas la réponse" },
//     { en: "Please write it down", fr: "Écris-le s’il te plaît" },
//     { en: "I need to go to the airport", fr: "Je dois aller à l’aéroport" },
//     { en: "What time do you finish work", fr: "À quelle heure finis-tu le travail" },
//     { en: "Can you recommend a good restaurant", fr: "Peux-tu recommander un bon restaurant" },
//     { en: "I’m learning English every day", fr: "J’apprends l’anglais tous les jours" },
//     { en: "Do you want to go out tonight", fr: "Veux-tu sortir ce soir" },
//     { en: "I don’t feel well", fr: "Je ne me sens pas bien" },
//     { en: "Let’s meet at the park", fr: "Retrouvons-nous au parc" },
//     { en: "Have a nice weekend", fr: "Bon week-end" },
//     { en: "breakfast", fr: "petit-déjeuner" },
//     { en: "lunch", fr: "déjeuner" },
//     { en: "dinner", fr: "dîner" },
//     { en: "I’m hungry", fr: "J’ai faim" },
//     { en: "I’m thirsty", fr: "J’ai soif" },
//     { en: "Can I have some water", fr: "Puis-je avoir de l’eau" },
//     { en: "book", fr: "livre" },
//     { en: "pen", fr: "stylo" },
//     { en: "notebook", fr: "cahier" },
//     { en: "I like reading books", fr: "J’aime lire des livres" },
//     { en: "computer", fr: "ordinateur" },
//     { en: "phone", fr: "téléphone" },
//     { en: "I’m using my phone", fr: "J’utilise mon téléphone" },
//     { en: "music", fr: "musique" },
//     { en: "I listen to music every day", fr: "J’écoute de la musique tous les jours" },
//     { en: "car", fr: "voiture" },
//     { en: "bus", fr: "bus" },
//     { en: "train", fr: "train" },
//     { en: "I take the bus to work", fr: "Je prends le bus pour aller au travail" },
//     { en: "school", fr: "école" },
//     { en: "teacher", fr: "professeur" },
//     { en: "student", fr: "étudiant" },
//     { en: "The teacher is very kind", fr: "Le professeur est très gentil" },
//     { en: "My friend lives nearby", fr: "Mon ami habite près d’ici" },
//     { en: "I love my family", fr: "J’aime ma famille" },
//     { en: "I am happy today", fr: "Je suis heureux aujourd’hui" },
//     { en: "I am sad because it’s raining", fr: "Je suis triste parce qu’il pleut" },
//     { en: "weather", fr: "temps (météo)" },
//     { en: "sunny", fr: "ensoleillé" },
//     { en: "rainy", fr: "pluvieux" },
//     { en: "It is sunny outside", fr: "Il fait ensoleillé dehors" },
//     { en: "It is rainy today", fr: "Il pleut aujourd’hui" },
//     { en: "time", fr: "temps (heure)" },
//     { en: "What time is it", fr: "Quelle heure est-il" }
// ];
 
//  function random(){
//   return registre[Math.floor(Math.random() * registre.length)]
//  }
//  const [data, setData] = useState(random())
//  const [inputUser, setInputUser] = useState("")
//  const [message, setMessage] = useState("")
//  const [score, setScore] = useState(0)
//   const refresh =()=>{
//     setData(random())
//     setInputUser("")
//     setMessage("")
//   }
//  useEffect(()=>{
//   const interval = setInterval(()=>{
//   },120000)
//   return()=> clearInterval(interval)
//  },[])
//  const reponse =()=>{
//   if(inputUser.trim().toLowerCase() === data.en.toLowerCase()){
//     setMessage("correct")
//     setInputUser(random())
//     setInputUser("")
//     setScore(score +1)
//     setTimeout(()=>{
//       refresh()
//     },1000)
//   }else{
//     setMessage(`incorrect, la bonne reponse est : ${data.en}`)
//   }
//  }

//  function creationCercle(){
//   let div = document.createElement('div')
//   div.classList.add('circle')
//   div.style.backgroundColor = `hsl(${Math.random() * 360},70%, 80%)`
//   div.style.left = Math.random() * window.innerWidth + 'px'

//   document.body.appendChild(div)
//   setTimeout(()=>{
//       div.remove()
//   },13000)
// }
// setInterval(creationCercle, 1000)
// const handleSubmit=(e)=>{
//   e.preventDefault()
// }
//   return(
//     <div className="frm">
//       <p>Traduire ce mot en Anglais : </p>
//       <strong>{data.fr}</strong><br/>
//       <div className="container">
//       <form onSubmit={handleSubmit}>
//       <input value={inputUser} onChange={(e)=> setInputUser(e.target.value)}/><br></br>
//       <button className="btnGreen" onClick={reponse}>Valider</button>
//       <button className="btnRed" onClick={refresh}>Raffrechir</button>
//       </form>
//       </div>
//       <p>{message}</p>
//       <p>score : {score}</p>
//       {/* <div className="circle"></div> */}
//     </div>
//   )
// }
// import React from 'react'

// export default function Tableau(){
// const phrases = [
//   {fr: "je suis venu voir mes parents", en: "i went to see my parents"},
//   {fr: "jusqu'ici", en: "so far"}
// ]
// const getRandom = ()=>{
// return phrases[Math.floor(Math.random() * phrases.length)]}
// const [phrase, setPhrase] = useState(getRandom())
// const [inputUser, setInputUser] = useState("")
// const [message, setMaessage] = useState("")
// const [score, setScore] = useState(0)

// useEffect(()=>{
//   setPhrase(getRandom())
  
// },[])

// const reponse=()=>{
//   if(inputUser.trim().toLowerCase() === phrase.en.toLowerCase()){
//     setMaessage("correct!!!")
//     setScore(score +1)
//     setInputUser("")
//     setMaessage("")
//   }else{
//     setMaessage(`incorrect , the right answer is : ${phrase.en}`)
//   }
// }
// const rafrechir =()=>{
//   setPhrase(getRandom())
//   setInputUser("")
//   setMaessage("")
// }
// const handleSubmit =(e)=>{
//   e.preventDefault()
// }
// return (
//   <div className="frm">
//     <h2>Translate this world in English : </h2>
//     <strong>{phrase.fr}</strong><br/>
//     <form className="conatainer" onSubmit={handleSubmit}>
//     <input value={inputUser} onChange={(e)=>setInputUser(e.target.value)}/><br></br>

//     <button className="btnGreen" onClick={reponse}>Valider</button>
//     <button className="btnRed" onClick={rafrechir}>rafrechir</button>
//     </form>
//     <p>{message}</p>
//     <p>score: {score}</p>
//   </div>
// )
// }
// import React from 'react'
//   const registre = [
//     { en: "hello", fr: "bonjour" },
//     { en: "goodbye", fr: "au revoir" },
//     { en: "please", fr: "s'il vous plaît" },
//     { en: "thank you", fr: "merci" },
//     { en: "yes", fr: "oui" },
//     { en: "no", fr: "non" },
//     { en: "sorry", fr: "désolé" },
//     { en: "excuse me", fr: "excusez-moi" },
//     { en: "how are you", fr: "comment ça va" },
//     { en: "I’m fine", fr: "je vais bien" },
//     { en: "what’s your name", fr: "comment tu t’appelles" },
//     { en: "my name is", fr: "je m’appelle" },
//     { en: "where are you from", fr: "d’où viens-tu" },
//     { en: "I’m from France", fr: "je viens de France" },
//     { en: "I don’t understand", fr: "je ne comprends pas" },
//     { en: "can you help me", fr: "peux-tu m’aider" },
//     { en: "I like it", fr: "ça me plaît" },
//     { en: "I don’t like it", fr: "ça ne me plaît pas" },
//     { en: "what time is it", fr: "quelle heure est-il" },
//     { en: "where is the bathroom", fr: "où sont les toilettes" },
//     { en: "good morning", fr: "bonjour (le matin)" },
//     { en: "good night", fr: "bonne nuit" },
//     { en: "see you later", fr: "à plus tard" },
//     { en: "have a nice day", fr: "bonne journée" },
//     { en: "I’m hungry", fr: "j’ai faim" },
//     { en: "I’m thirsty", fr: "j’ai soif" },
//     { en: "I’m tired", fr: "je suis fatigué" },
//     { en: "I’m happy", fr: "je suis content" },
//     { en: "I’m sad", fr: "je suis triste" },
//     { en: "I’m busy", fr: "je suis occupé" },
//     { en: "what’s this", fr: "qu’est-ce que c’est" },
//     { en: "how much is it", fr: "combien ça coûte" },
//     { en: "I need help", fr: "j’ai besoin d’aide" },
//     { en: "call the police", fr: "appelle la police" },
//     { en: "I’m lost", fr: "je suis perdu" },
//     { en: "I love you", fr: "je t’aime" },
//     { en: "congratulations", fr: "félicitations" },
//     { en: "happy birthday", fr: "joyeux anniversaire" },
//     { en: "welcome", fr: "bienvenue" },
//     { en: "good luck", fr: "bonne chance" },
//     { en: "be careful", fr: "fais attention" },
//     { en: "I’m sorry to hear that", fr: "je suis désolé d’entendre ça" },
//     { en: "can I ask you a question", fr: "puis-je te poser une question" },
//     { en: "what do you do", fr: "que fais-tu dans la vie" },
//     { en: "I’m a student", fr: "je suis étudiant" },
//     { en: "I work in a restaurant", fr: "je travaille dans un restaurant" },
//     { en: "do you speak English", fr: "parles-tu anglais" },
//     { en: "a little", fr: "un peu" },
//     { en: "I don’t speak English well", fr: "je ne parle pas bien anglais" },
//     { en: "can you repeat please", fr: "peux-tu répéter s’il te plaît" },
//     { en: "slowly please", fr: "lentement s’il te plaît" },
//     { en: "where is the train station", fr: "où est la gare" },
//     { en: "I’m looking for the hotel", fr: "je cherche l’hôtel" },
//     { en: "what time does it open", fr: "à quelle heure ça ouvre" },
//     { en: "what time does it close", fr: "à quelle heure ça ferme" },
//     { en: "I like music", fr: "j’aime la musique" },
//     { en: "I like sports", fr: "j’aime le sport" },
//     { en: "I like reading", fr: "j’aime lire" },
//     { en: "I like traveling", fr: "j’aime voyager" },
//     { en: "family", fr: "famille" },
//     { en: "friend", fr: "ami" },
//     { en: "boyfriend", fr: "petit ami" },
//     { en: "girlfriend", fr: "petite amie" },
//     { en: "child", fr: "enfant" },
//     { en: "parents", fr: "parents" },
//     { en: "mother", fr: "mère" },
//     { en: "father", fr: "père" },
//     { en: "brother", fr: "frère" },
//     { en: "sister", fr: "sœur" },
//     { en: "son", fr: "fils" },
//     { en: "daughter", fr: "fille" },
//     { en: "uncle", fr: "oncle" },
//     { en: "aunt", fr: "tante" },
//     { en: "cousin", fr: "cousin/cousine" },
//     { en: "grandmother", fr: "grand-mère" },
//     { en: "grandfather", fr: "grand-père" },
//     { en: "nephew", fr: "neveu" },
//     { en: "niece", fr: "nièce" },
//     { en: "house", fr: "maison" },
//     { en: "apartment", fr: "appartement" },
//     { en: "room", fr: "chambre" },
//     { en: "kitchen", fr: "cuisine" },
//     { en: "bathroom", fr: "salle de bain" },
//     { en: "living room", fr: "salon" },
//     { en: "bed", fr: "lit" },
//     { en: "chair", fr: "chaise" },
//     { en: "table", fr: "table" },
//     { en: "window", fr: "fenêtre" },
//     { en: "door", fr: "porte" },
//     { en: "school", fr: "école" },
//     { en: "university", fr: "université" },
//     { en: "teacher", fr: "professeur" },
//     { en: "student", fr: "étudiant" },
//     { en: "classroom", fr: "salle de classe" },
//     { en: "lesson", fr: "leçon" },
//     { en: "exam", fr: "examen" },
//     { en: "homework", fr: "devoirs" },
//     { en: "car", fr: "voiture" },
//     { en: "bus", fr: "bus" },
//     { en: "train", fr: "train" },
//     { en: "plane", fr: "avion" },
//     { en: "bicycle", fr: "vélo" },
//     { en: "ticket", fr: "billet" },
//     { en: "map", fr: "carte" },
//     { en: "street", fr: "rue" },
//     { en: "city", fr: "ville" },
//     { en: "country", fr: "pays" },
//     { en: "shop", fr: "magasin" },
//     { en: "market", fr: "marché" },
//     { en: "restaurant", fr: "restaurant" },
//     { en: "menu", fr: "menu" },
//     { en: "breakfast", fr: "petit-déjeuner" },
//     { en: "lunch", fr: "déjeuner" },
//     { en: "dinner", fr: "dîner" },
//     { en: "water", fr: "eau" },
//     { en: "bread", fr: "pain" },
//     { en: "meat", fr: "viande" },
//     { en: "fish", fr: "poisson" },
//     { en: "fruit", fr: "fruit" },
//     { en: "vegetable", fr: "légume" },
//     { en: "shirt", fr: "chemise" },
//     { en: "pants", fr: "pantalon" },
//     { en: "dress", fr: "robe" },
//     { en: "shoes", fr: "chaussures" },
//     { en: "hat", fr: "chapeau" },
//     { en: "jacket", fr: "veste" },
//     { en: "coat", fr: "manteau" },
//     { en: "skirt", fr: "jupe" },
//     { en: "socks", fr: "chaussettes" },
//     { en: "gloves", fr: "gants" },
//     { en: "red", fr: "rouge" },
//     { en: "blue", fr: "bleu" },
//     { en: "green", fr: "vert" },
//     { en: "yellow", fr: "jaune" },
//     { en: "black", fr: "noir" },
//     { en: "white", fr: "blanc" },
//     { en: "pink", fr: "rose" },
//     { en: "orange", fr: "orange" },
//     { en: "purple", fr: "violet" },
//     { en: "brown", fr: "marron" },
//     { en: "happy", fr: "heureux" },
//     { en: "sad", fr: "triste" },
//     { en: "angry", fr: "en colère" },
//     { en: "tired", fr: "fatigué" },
//     { en: "excited", fr: "excité" },
//     { en: "nervous", fr: "nerveux" },
//     { en: "bored", fr: "ennuyé" },
//     { en: "scared", fr: "effrayé" },
//     { en: "calm", fr: "calme" },
//     { en: "love", fr: "amour" },
//     { en: "hate", fr: "haine" },
//     { en: "friendship", fr: "amitié" },
//     { en: "family", fr: "famille" },
//     { en: "work", fr: "travail" },
//     { en: "school", fr: "école" },
//     { en: "home", fr: "maison" },
//     { en: "food", fr: "nourriture" },
//     { en: "drink", fr: "boisson" },
//     { en: "coffee", fr: "café" },
//     { en: "tea", fr: "thé" },
//     { en: "juice", fr: "jus" },
//     { en: "milk", fr: "lait" },
//     { en: "beer", fr: "bière" },
//     { en: "wine", fr: "vin" },
//     { en: "sun", fr: "soleil" },
//     { en: "rain", fr: "pluie" },
//     { en: "snow", fr: "neige" },
//     { en: "wind", fr: "vent" },
//     { en: "cloud", fr: "nuage" },
//     { en: "hot", fr: "chaud" },
//     { en: "cold", fr: "froid" },
//     { en: "warm", fr: "tiède" },
//     { en: "cool", fr: "frais" },
//     { en: "day", fr: "jour" },
//     { en: "night", fr: "nuit" },
//     { en: "morning", fr: "matin" },
//     { en: "evening", fr: "soir" },
//     { en: "How are you today", fr: "Comment vas-tu aujourd’hui" },
//     { en: "I’m going to the store", fr: "Je vais au magasin" },
//     { en: "Can you help me please", fr: "Peux-tu m’aider s’il te plaît" },
//     { en: "What time is the meeting", fr: "À quelle heure est la réunion" },
//     { en: "I don’t understand the question", fr: "Je ne comprends pas la question" },
//     { en: "Where do you live", fr: "Où habites-tu" },
//     { en: "I like to listen to music", fr: "J’aime écouter de la musique" },
//     { en: "She is my best friend", fr: "Elle est ma meilleure amie" },
//     { en: "We are going to the beach tomorrow", fr: "Nous allons à la plage demain" },
//     { en: "Can I have a glass of water", fr: "Puis-je avoir un verre d’eau" },
//     { en: "I’m learning English", fr: "J’apprends l’anglais" },
//     { en: "It’s a beautiful day", fr: "C’est une belle journée" },
//     { en: "Please speak slowly", fr: "Parle lentement s’il te plaît" },
//     { en: "I’m sorry for being late", fr: "Je suis désolé d’être en retard" },
//     { en: "Do you like this movie", fr: "Aimes-tu ce film" },
//     { en: "I have two brothers and one sister", fr: "J’ai deux frères et une sœur" },
//     { en: "What do you want to eat", fr: "Que veux-tu manger" },
//     { en: "I need to buy some clothes", fr: "J’ai besoin d’acheter des vêtements" },
//     { en: "Can you show me the way", fr: "Peux-tu me montrer le chemin" },
//     { en: "I’m very happy to see you", fr: "Je suis très content de te voir" },
//     { en: "Where is the nearest bus stop", fr: "Où est l’arrêt de bus le plus proche" },
//     { en: "I would like a coffee please", fr: "Je voudrais un café s’il vous plaît" },
//     { en: "How much does this cost", fr: "Combien ça coûte" },
//     { en: "I’m looking for a hotel", fr: "Je cherche un hôtel" },
//     { en: "What is your phone number", fr: "Quel est ton numéro de téléphone" },
//     { en: "Do you have any brothers or sisters", fr: "As-tu des frères ou des sœurs" },
//     { en: "I’m feeling tired today", fr: "Je me sens fatigué aujourd’hui" },
//     { en: "Can I pay by credit card", fr: "Puis-je payer par carte bancaire" },
//     { en: "The weather is nice today", fr: "Il fait beau aujourd’hui" },
//     { en: "I don’t know the answer", fr: "Je ne connais pas la réponse" },
//     { en: "Please write it down", fr: "Écris-le s’il te plaît" },
//     { en: "I need to go to the airport", fr: "Je dois aller à l’aéroport" },
//     { en: "What time do you finish work", fr: "À quelle heure finis-tu le travail" },
//     { en: "Can you recommend a good restaurant", fr: "Peux-tu recommander un bon restaurant" },
//     { en: "I’m learning English every day", fr: "J’apprends l’anglais tous les jours" },
//     { en: "Do you want to go out tonight", fr: "Veux-tu sortir ce soir" },
//     { en: "I don’t feel well", fr: "Je ne me sens pas bien" },
//     { en: "Let’s meet at the park", fr: "Retrouvons-nous au parc" },
//     { en: "Have a nice weekend", fr: "Bon week-end" },
//     { en: "breakfast", fr: "petit-déjeuner" },
//     { en: "lunch", fr: "déjeuner" },
//     { en: "dinner", fr: "dîner" },
//     { en: "I’m hungry", fr: "J’ai faim" },
//     { en: "I’m thirsty", fr: "J’ai soif" },
//     { en: "Can I have some water", fr: "Puis-je avoir de l’eau" },
//     { en: "book", fr: "livre" },
//     { en: "pen", fr: "stylo" },
//     { en: "notebook", fr: "cahier" },
//     { en: "I like reading books", fr: "J’aime lire des livres" },
//     { en: "computer", fr: "ordinateur" },
//     { en: "phone", fr: "téléphone" },
//     { en: "I’m using my phone", fr: "J’utilise mon téléphone" },
//     { en: "music", fr: "musique" },
//     { en: "I listen to music every day", fr: "J’écoute de la musique tous les jours" },
//     { en: "car", fr: "voiture" },
//     { en: "bus", fr: "bus" },
//     { en: "train", fr: "train" },
//     { en: "I take the bus to work", fr: "Je prends le bus pour aller au travail" },
//     { en: "school", fr: "école" },
//     { en: "teacher", fr: "professeur" },
//     { en: "student", fr: "étudiant" },
//     { en: "The teacher is very kind", fr: "Le professeur est très gentil" },
//     { en: "My friend lives nearby", fr: "Mon ami habite près d’ici" },
//     { en: "I love my family", fr: "J’aime ma famille" },
//     { en: "I am happy today", fr: "Je suis heureux aujourd’hui" },
//     { en: "I am sad because it’s raining", fr: "Je suis triste parce qu’il pleut" },
//     { en: "weather", fr: "temps (météo)" },
//     { en: "sunny", fr: "ensoleillé" },
//     { en: "rainy", fr: "pluvieux" },
//     { en: "It is sunny outside", fr: "Il fait ensoleillé dehors" },
//     { en: "It is rainy today", fr: "Il pleut aujourd’hui" },
//     { en: "time", fr: "temps (heure)" },
//     { en: "What time is it", fr: "Quelle heure est-il" }
// ];
// const randomData = () =>{
//   return registre[Math.floor(Math.random() * registre.length)]
// }
// export default function Tableau(){
//   const [useData, setUseData] = useState(randomData())
//   const [inputUser, setInputUser] = useState("")
//   const [score, setScore] = useState(0)
//   useEffect(()=>{
//     const interval = setInterval(()=>{
//       setUseData(randomData())
//     }, 120000)
//     return ()=> clearInterval(interval)
//   },[])
//   function creationCercle(){
//     let div = document.createElement('div')
//     div.classList.add('circle')
//     div.style.backgroundColor = `hsl(${Math.random() * 360},70%, 80%)`
//     div.style.left = Math.random() * window.innerWidth + 'px'

//     document.body.appendChild(div)
//     setTimeout(()=>{
//         div.remove()
//     },13000)
//   }
//   setInterval(creationCercle, 10000)
//   const speak = (text, lang = "en-US") => {
//     if ('speechSynthesis' in window) {
//       window.speechSynthesis.cancel();
//       const utterance = new window.SpeechSynthesisUtterance(text);
//       utterance.lang = lang;
//       utterance.rate = 1;
//       window.speechSynthesis.speak(utterance);
//     }
//   };
  
//   const handleClick = () => {
//     if(!inputUser.trim()){
//       alert('Veuillez entrer une réponse avant de valider.');
//       return;
//     }
//     if (inputUser.trim().toLowerCase() === useData.en.toLowerCase()) {
//       alert('correct answer!!!');
//       speak(useData.en, "en-US");
//       setUseData(randomData());
//       setInputUser("");
//       setScore(score + 1)
//     } else {
//       alert(`incorrect answer, the right answer is: ${useData.en}`);
//       speak("la bonne réponse est :", "fr-FR");
//       setTimeout(() => speak(useData.en, "en-US"), 1200);
//     }
//   };
  
  
//   const handleSubmit =(e)=>{
//     e.preventDefault()
//   }
//   const handleRefresh = () => {
//     setUseData(randomData());
//     setInputUser("");
//   };
//   return(
//     <div className="frm">
//     <h2>Traduire ce mot en Anglais :</h2>
//     <strong>{useData.fr}</strong>
//     <div className="container">
//     <button type="button" onClick={() => speak(useData.en, "en-US")}>Écouter</button>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={inputUser}
//         placeholder="Entrez la traduction en anglais"
//         onChange={(e) => setInputUser(e.target.value)}
//       /><br/>
//       <button type='button' onClick={handleClick}>Valider</button>
//       <button type="button" onClick={handleRefresh}>Refresh</button>
//     </form>
//     <p>Score : {score}</p>
//     </div>
//   </div>
  
//   )
// }
// import React,{useEffect, useState} from 'react'
// import axios from 'axios'
// import { compileAsync } from 'sass'
// export default function Tableau(){
//     const data = [
//         {id: 1, name: "pantallon", categorie: "femme", prix: 23, quantite: 2, image: null },
//         {id: 2, name: "pantallon", categorie: "femme", prix: 23, quantite: 2, image: null },
//         {id: 3, name: "pantallon", categorie: "femme", prix: 23, quantite: 2, image: null },
//         {id: 4, name: "pantallon", categorie: "femme", prix: 23, quantite: 2, image: null },
//     ]
//     const categories = [
//         {id: 1, name: "Femme"},
//         {id: 2, name: "Homme"},
//         {id: 3, name: "Enfant"},
//     ]

//     const [useData , setUseData] = useState([])
//     const [cat] = useState(categories)
//     const [idEdite, setIdEdite] = useState(0)
//     const [newData, setNewData] = useState({
//         name: "",
//         categorie: "",
//         prix: "",
//         quantite: "",
//         imageUrl: "",
//         image: null
//     })
//     const fetchItems = async ()=>{
//         const reponse = await axios("http://localhost:3002/items")
//         setUseData(reponse.data)
//         console.log(reponse.data)
//         }
        
        
//         useEffect(()=>{
//          fetchItems()
//         },[])

//         const handleSubmit= async(e)=>{
//             e.preventDefault()
//             if(newData.name === "" || newData.prix === "" || newData.categorie === ""){
//                 alert("complete all input ")
//                 return
//             }
//             try{
//                 let reponse;
//                 if(idEdite){
//                     const newEdit= {
//                     name: useData.name,
//                     categorie: useData.categorie,
//                     prix: newData.prix,
//                     quantite : newData.quantite,
//                     image: newData.imageUrl
//                     }
//                     reponse = await axios.put(`http://localhost:3002/items/${idEdite}`, newEdit)
//                     setUseData(useData.map((item)=>(
//                         item.id === idEdite ? reponse.data : item
//                     )))
//                     setNewData({
//                     name: "",
//                     categorie: "",
//                     prix: "",
//                     quantite: "",
//                     imageUrl: "",
//                     image: null
//                     })
//                 }else{
//                     const newD = {
//                         id : useData.length + 1,
//                         name: useData.name,
//                         categorie: useData.categorie,
//                         prix: newData.prix,
//                         quantite : newData.quantite,
//                         image: newData.imageUrl
//                     }
//                     reponse = await axios.post("http://localhost:3002/items", newD)
//                     setUseData([...useData, reponse.data])
//                     alert("the data was create successfull")
//                 }
//             }catch(error){
//                 alert("error")
//             }

//         }
//         const handleDelete = async(id)=>{
//             try{
//                 let reponse;
//                 const confirmDelete = window.confirm("do you want to delete this file ??")
//                 if(confirmDelete){
//                     reponse = await axios.delete(`http://localhost:3002/items/${id}`)
//                     setUseData(useData.filter((item)=>(
//                         item.id !== id
//                     )))
//                 }
//             }catch(error){
//                 alert("warning , this error was appendding")
//             }
//         }
//         const handleEdite =(item)=>{
//             setIdEdite(item.id)
//             setNewData({
//                 name: item.name,
//                 categorie: item.categorie,
//                 prix: item.prix,
//                 quantite : item.quantite,
//                 image: item.image,
//                 imageUrl: item.imageUrl,
//             })
//         }
//         const handleChange=(e)=>{
//             const {name, value, files} = e.target
//             if(name === "image"){
//                 const file = files[0]
//                 setNewData(prev=>(
//                     {...prev,
//                         image: file,
//                         imageUrl: file ? URL.createObjectURL(file) : ''
//                     }
//                 ))
//             }else{
//                 setNewData(prev=>(
//                     {...prev, [name]: value}
//                 ))
//             }
//         }
//     return(
//         <div className='flex justify-center align-tem-center'>
//             <div className='flex justify-center align-tem-center'>
//             <form onSubmit={handleSubmit} className='flex flex-col gap-2 border-black' style={{ width: "50%", margin: "auto" }}>
//                 <label>Name:
//                     <input type="text" name="name" value={newData.name} onChange={handleChange}  placeholder="Entrez le nom de l'article"/>
//                 </label>
//                 <label>Categorie:
//                     <select name="categorie" value={newData.categorie} onChange={handleChange}  required>
//                         <option >Choisissez une categorie</option>
//                         {cat.map((item)=>(
//                             <option key={item.id}>{item.name}</option>
//                         ))}
//                     </select>
//                 </label>
//                 <label>Prix:
//                         <input type="number" value={newData.prix} onChange={handleChange}  name="prix" placeholder="Entrez le prix de l'article"/>
//                 </label>
//                 <label>Quantite:
//                     <input type="number" value={newData.quantite} onChange={handleChange}  name="quantite" placeholder="Entrez la quantite de l'article"/>
//                 </label>
//                 <label>Image:
//                     <input type="file" name="image" onChange={handleChange}  accept="image/*"/>
//                 </label>
//                 <button type="submit">Ajouter</button>
//             </form>
//             </div>
//             <table border="1" cellPadding="5" style={{ width: "100%", textAlign: "center" }}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>NAME</th>
//                         <th>CATEGORIES</th>
//                         <th>PRICE</th>
//                         <th>QUANTITY</th>
//                         <th>IMAGES</th>
//                         <th>ACTIONS</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {useData.map((item)=>(
//                     <tr key={item.id}>
//                         <td>{item.id}</td>
//                         <td>{item.name}</td>
//                         <td>{item.categorie}</td>
//                         <td>{item.prix}$</td>
//                         <td>{item.quantite}P</td>
//                         <td>{item.image ?
//                         <img src={item.image} alt={item.name}/>
//                         :
//                         <span>pas d'image</span>
//                         }</td>
//                         <td>
//                             <button onClick={()=>handleEdite(item)} className='bg-green-500 text-white p-2 rounded-md'>Modifier</button>
//                             <button onClick={()=> handleDelete(item.id)} className='bg-red-500 text-white p-2 rounded-md'>Supprimer</button>
//                         </td>
//                     </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tableau() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setItems(res.data);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/items', form);
    setForm({ name: '', description: '' });
    fetchItems();
  };

  const handleDelete = async id => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h1>Liste des items</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nom" required />
        <input type="text" name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item._id}>
            <strong>{item.name}:</strong> {item.description}
            <button onClick={() => handleDelete(item._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
