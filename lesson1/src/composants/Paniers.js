import '../index.css';
 import React from 'react';
 import PaymentPage from './PaymentPage'
import { navigate, useNavigate } from 'react-router-dom';
export default function Paniers({ cards =[] , setCards, formRef1, handleClose, total, handlePaniers, handlePaniersMoins} ) {
 const navigate = useNavigate();
  const handleBuyClick = () => {
  navigate('/PaymentPage');
 }
 
  return (
    <div >
      <section ref={formRef1} className="scroll-smooth">
        <h2 className="flex justify-center items-center font-bold text-xl mt-5">le panier</h2>
        {cards.length === 0 ? (
          <h2 className="text-red-600 flex justify-center items-center font-bold text-xl">pas de l'article selectionné</h2>
        ) : (
          <div className='flex flex-wrap justify-center items-center m-7 gap-4'>
            {cards.map((card) => (
              <div key={card.id} className='bg-gray-100 p-4 rounded-lg shadow-md flex'>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-40 h-36 object-cover rounded-md"
                />
                <div className="ml-6">
                    <h2 className="font-bold">ID : {card.id}</h2>
                  <h2 className="text-xl font-bold text-green-900 relative mb-6">{card.name}</h2>
                  <span className="text-lg font-semibold text-green-900">{card.prix}$ {""} X {card.quantity}Piece (s)</span>
                  <p className="text-gray-700">Description du produit à personnaliser</p>
                  <span className="flex items-center mt-1">
                    <img src="./images/star.svg" alt="star" />
                    <img src="./images/star.svg" alt="star" />
                    <img src="./images/star.svg" alt="star" />
                    <img src="./images/star-half-fill.svg" alt="half star" />
                    <img src="./images/star-no-fill.svg" alt="no star" />
                    <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                  </span>
                  <div className='flex items-center gap-6 mt-4 mb-4 bg-gray-200 p-2 rounded-full justify-center'>
                    <button className='text-2xl' onClick={(e)=>handlePaniersMoins(card)}>-</button>
                    <h3 className='text-xl'>{card.quantity}</h3>
                    <button className='text-2xl' onClick={(e)=>handlePaniers(card)}>+</button> 
                  </div>
                  <div className='flex items-center gap-4'>
                    <button 
                    onClick={() => navigate('/PaymentPage', { state: { cartItems: cards, total } })}
                    className='bg-green-900 rounded-full p-2 text-white text-xs hover:bg-green-600'
                  >
                    Acheter
                  </button>

                      <button
                     className='bg-red-900
                     rounded-full p-2 text-white
                      text-xs hover:bg-red-600' onClick={(e)=>handleClose(card.id)}
                      >Fermer</button>
                  </div>
                  <div className="flex mt-4  font-bold text-green-800">
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center items-center mb-5 mt-5 text-xl font-bold">
        Total:{total < 0 ? (
          <span className="text-red-600">{total.toFixed(2)}$</span>
        )
        : (
          <span className="text-black-600">{total.toFixed(2)}$</span> 
        )  } 
        
        </div>
      </section>
    </div>
  );
}

// import React, { useState } from 'react';
// import '../index.css';
// import Nouveau from './Nouveau';
// import Paniers from './Paniers';

// export default function Cards1() {
//   // Liste des produits
//   const [data, setData] = useState([
//     {
//       id: 1,
//       name: "Casque Audio",
//       prix: 199,
//       image: "./images/headphone.jpg",
//       liked: false,
//     },
//     {
//       id: 2,
//       name: "Camera Pro",
//       prix: 249,
//       image: "./images/camera.jpg",
//       liked: false,
//     }
//     // Ajoutez vos produits ici ...
//   ]);

//   // Panier : chaque article a quantity
//   const [cart, setCart] = useState([]);

//   // Popup notification
//   const [popupMsg, setPopupMsg] = useState(null);

//   // Gestion du like
//   const toggleLike = (id) => {
//     setData(prev =>
//       prev.map(item =>
//         item.id === id ? { ...item, liked: !item.liked } : item
//       )
//     );
//   };

//   // Ajouter au panier
//   const addToCart = (product) => {
//     const exists = cart.find(item => item.id === product.id);
//     if (exists) {
//       setCart(cart.map(item => 
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ));
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//     showPopup(`Ajouté au panier : ${product.name}`);
//   };

//   // Modifier quantité dans le panier
// const changeQuantity = (id, delta) => {
//   setCart(prevCart => {
//     // Copie du tableau pour éviter mutation directe
//     const updatedCart = prevCart.map(item => {
//       if (item.id === id) {
//         // Calcule la nouvelle quantité, minimum 1
//         const newQuantity = item.quantity + delta;
//         // Si nouvelle quantité est inférieure à 1, on la remplace par 1 (ou on pourra supprimer en filtrant après)
//         return { ...item, quantity: Math.max(newQuantity, 1) };
//       }
//       return item;
//     });

//     // On filtre après pour enlever les articles à quantité <= 0 (optionnel)
//     return updatedCart.filter(item => item.quantity > 0);
//   });
// };


//   // Supprimer du panier
//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item.id !== id));
//   };

//   // Popup affichage
//   const showPopup = (msg) => {
//     setPopupMsg(msg);
//     setTimeout(() => 
//         setPopupMsg(null), 3000);
//   };

//   // Achat (exemple d'action)
//   const handleBuyNow = (product) => {
//     showPopup(`Achat effectué : ${product.name}`);
//     // Ici vous pouvez ajouter un vrai process d'achat...
//   };

//   return (
//     <div className="p-4 max-w-screen-lg mx-auto">

//       <h1 className='text-3xl font-bold mb-6 text-center text-green-900'>Boutique</h1>

//       {popupMsg && (
//         <div className="fixed top-10 right-10 bg-green-600 text-white px-5 py-3 rounded shadow-lg animate-fadeInOut z-50">
//           {popupMsg}
//         </div>
//       )}

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map(product => (
//           <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
//             <img src={product.image} alt={product.name} className="h-48 object-cover" />
//             <div className="p-4 flex flex-col flex-grow">
//               <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
//               <p className="text-green-800 font-bold text-lg mb-4">{product.prix} $</p>

//               {/* Actions */}
//               <div className="flex justify-between items-center mt-auto">
//                 {/* Like */}
//                 <button
//                   onClick={() => toggleLike(product.id)}
//                   aria-label="Like"
//                   className="text-2xl focus:outline-none"
//                 >
//                   {product.liked ? '❤️' : '🤍'}
//                 </button>

//                 {/* Ajouter au panier */}
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//                 >
//                   Ajouter au panier
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Panier */}
//       <h2 className="mt-12 mb-4 text-2xl font-bold text-green-900 text-center">Votre Panier</h2>
//       {cart.length === 0 ? (
//         <p className="text-center text-gray-600">Votre panier est vide.</p>
//       ) : (
//         <div className="space-y-4">
//           {cart.map(item => (
//             <div key={item.id} className="flex items-center bg-gray-100 rounded p-4">
//               <img src={item.image} alt={item.name} className="w-24 h-20 object-cover rounded" />
//               <div className="ml-4 flex-grow">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p className="text-green-700 font-bold">{item.prix} $</p>
//               </div>

//               {/* Quantité */}
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => changeQuantity(item.id, -1)}
//                   className="bg-gray-300 px-2 rounded hover:bg-gray-400 transition"
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   onClick={() => changeQuantity(item.id, +1)}
//                   className="bg-gray-300 px-2 rounded hover:bg-gray-400 transition"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Acheter */}
//               <button
//                 onClick={() => handleBuyNow(item)}
//                 className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//               >
//                 Acheter
//               </button>

//               {/* Supprimer */}
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="ml-2 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 transition"
//               >
//                 Supprimer
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

