// import React from "react"

// export default function Shoping({cards, handleCancel, total}){
//     return (
//         <div>
//             <h2>Panier</h2>
//             {cards.length === 0 ? 
//         <p>le panier est vide</p> : 
//         <ul>
//         {cards.map((card)=>(
//             <li>{card.name} X {card.quantity} pieces {""}={""} {card.price * card.quantity} $<button onClick={()=>handleCancel(card.id)}>Annuler</button></li>
//         ))}    
//             </ul>
//         }
//         <h2>Total : {total} $</h2>
//         </div>

//     )
// }

// import React, { useState } from 'react';

// const PaymentPage = ({ cards = [], handleCancel, total = 0 }) => {
//   // Données de l'article (à remplacer par les props ou le state réel)
//   const [article, setArticle] = useState({
//     id: 1,
//     name: 'AdPods Max',
//     description: 'A perfect feature of highly fluidity, premium sound quality with noise cancellation.',
//     price: 299.99,
//     image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
//     category: 'AdH to Cafe'
//   });

  // const [quantity, setQuantity] = useState(1);
//   const [paymentMethod, setPaymentMethod] = useState('credit-card');

//   const totalPrice = (article.price * quantity).toFixed(2);

  // const handleQuantityChange = (newQuantity) => {
  //   if (newQuantity > 0 && newQuantity <= 10) {
  //     setQuantity(newQuantity);
  //   }
  // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logique de traitement du paiement
//     alert(`Paiement de $${totalPrice} effectué pour ${quantity} ${article.name}(s)`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Finaliser votre achat</h1>
        
//         <div className="bg-white shadow rounded-lg overflow-hidden">
//           <div className="md:flex">
//             {/* Section article */}
//             {cards.map((item) => (
//             <div key={item.id} className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200">
//               <div className="flex items-center mb-4">
//                 <img 
//                   src={item.image} 
//                   alt={item.name} 
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div className="ml-4">
//                   <h2 className="text-xl font-semibold">{item.name}</h2>
//                   <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
//                     {item.name}
//                   </span>
//                 </div>
//               </div>

//               <p className="text-gray-600 mb-6">{item.name}</p>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <button 
//                     onClick={() => handleQuantityChange(quantity - 1)}
//                     className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
//                   >
//                     -
//                   </button>
//                   <span className="bg-gray-100 px-4 py-1">{quantity}</span>
//                   <button 
//                     onClick={() => handleQuantityChange(quantity + 1)}
//                     className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-500">Prix unitaire</p>
//                   <p className="text-lg font-semibold">${item.prix}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//             {/* Section paiement */}
//             <div className="md:w-1/2 p-6">
//               <h3 className="text-lg font-medium mb-4">Méthode de paiement</h3>
              
//               <div className="space-y-4 mb-6">
//                 <div className="flex items-center">
//                   <input
//                     id="credit-card"
//                     name="payment-method"
//                     type="radio"
//                     checked={paymentMethod === 'credit-card'}
//                     onChange={() => setPaymentMethod('credit-card')}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                   />
//                   <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
//                     Carte de crédit
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     id="paypal"
//                     name="payment-method"
//                     type="radio"
//                     checked={paymentMethod === 'paypal'}
//                     onChange={() => setPaymentMethod('paypal')}
//                     className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                   />
//                   <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
//                     PayPal
//                   </label>
//                 </div>
//               </div>
              
//               {paymentMethod === 'credit-card' && (
//                 <form className="space-y-4">
//                   <div>
//                     <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
//                       Numéro de carte
//                     </label>
//                     <input
//                       type="text"
//                       id="card-number"
//                       placeholder="4242 4242 4242 4242"
//                       className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
                  
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
//                         Date d'expiration
//                       </label>
//                       <input
//                         type="text"
//                         id="expiry-date"
//                         placeholder="MM/AA"
//                         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
                    
//                     <div>
//                       <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
//                         CVC
//                       </label>
//                       <input
//                         type="text"
//                         id="cvc"
//                         placeholder="123"
//                         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                       />
//                     </div>
//                   </div>
//                 </form>
//               )}
              
//               <div className="mt-8 border-t border-gray-200 pt-4">
//                 <div className="flex justify-between text-lg font-medium">
//                   <span>Total</span>
//                   <span>${totalPrice}</span>
//                 </div>
//                 <button
//                   onClick={handleSubmit}
//                   className="mt-4 w-full bg-blue-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Payer maintenant
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React,{useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  // Récupérer les articles du panier et le total depuis l'état de navigation
  const [cartItems, setCartItems] = useState(state?.cartItems || []);
  const total = cartItems.reduce((acc, item) => acc + (item.prix * item.quantity), 0)

  const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement du paiement
    alert(`Paiement de $${total} effectué pour ${cartItems.length} article(s)`);
    // Redirection après paiement
    navigate('../cards');
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?');
    if (confirmDelete) {
      const updatedCart = cartItems.filter(item => item.id !== id);
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Finaliser votre achat</h1>
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Section articles */}
            <div className="md:w-1/2 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <h2 className="text-xl font-semibold mb-4">Vos articles</h2>
              
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Votre panier est vide</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start border-b pb-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantité: {item.quantity}</p>
                        <p className="text-sm font-semibold">${item.prix} x {item.quantity} = ${(item.prix * item.quantity).toFixed(2)}</p>
                      </div>
                       <div className="flex items-center justify-between">
                    <div className="flex items-center">
                   {/* <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="bg-gray-100 px-4 py-1">{quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Prix unitaire</p>
                    */}<button onClick={()=>handleDelete(item.id)} className="text-mx font-semibold bg-red-600 p-1 rounded-lg text-white hover:bg-red-700">Supprimer</button>
                  </div>
                </div>
                    </div> 
                  ))}
                </div>
              )}
            </div>

            {/* Section paiement */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-lg font-medium mb-4">Méthode de paiement</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <input
                    id="credit-card"
                    name="payment-method"
                    type="radio"
                    checked={paymentMethod === 'credit-card'}
                    onChange={() => setPaymentMethod('credit-card')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="credit-card" className="ml-3 block text-sm font-medium text-gray-700">
                    Carte de crédit
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="paypal"
                    name="payment-method"
                    type="radio"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                    PayPal
                  </label>
                </div>
              </div>
              
              {paymentMethod === 'credit-card' && (
                <form className="space-y-4">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                      Numéro de carte
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="4242 4242 4242 4242"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">
                        Date d'expiration
                      </label>
                      <input
                        type="text"
                        id="expiry-date"
                        placeholder="MM/AA"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">
                        CVC
                      </label>
                      <input
                        type="text"
                        id="cvc"
                        placeholder="123"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </form>
              )}
              
              <div className="mt-8 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-lg font-medium mb-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={cartItems.length === 0}
                  className={`mt-4 w-full rounded-md py-3 px-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    cartItems.length === 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                  }`}
                >
                  {cartItems.length === 0 ? 'Panier vide' : 'Payer maintenant'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;