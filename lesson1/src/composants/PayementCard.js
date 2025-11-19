// import React from 'react'

// export default function Payement(){
//     return(
//         <div>
//             <section className="bg-white shadow-md mb-6">
//                 <div className="max-w-5xl mx-auto  flex items-center justify-between p-4 mb-4 px-4">
//                     <img className="w-15 h-20" src="./images/logo.jpg" alt="logo" />
//                     <nav>
//                     <ul className="flex space-x-4 relative">
//                         <li className="group relative">
//                         <a
//                             href="#"
//                             className="text-blue-500 text-green-900 font-bold text-xl inline-flex items-center"
//                         >
//                             Categorie
//                             <svg
//                             className="ml-1 w-4 h-4 fill-current"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             >
//                             <path d="M5.25 7.5l4.5 4.5 4.5-4.5h-9z" />
//                             </svg>
//                         </a>
//                         {/* Sous-menu */}
//                         <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[150px] z-10">
//                             <li>
//                             <a
//                                 href="#"
//                                 className="block px-4 py-2 text-green-900 hover:bg-orange-200"
//                             >
//                                 Sous-catégorie 1
//                             </a>
//                             </li>
//                             <li>
//                             <a
//                                 href="#"
//                                 className="block px-4 py-2 text-green-900 hover:bg-orange-200"
//                             >
//                                 Sous-catégorie 2
//                             </a>
//                             </li>
//                             <li>
//                             <a
//                                 href="#"
//                                 className="block px-4 py-2 text-green-900 hover:bg-orange-200"
//                             >
//                                 Sous-catégorie 3
//                             </a>
//                             </li>
//                         </ul>
//                         </li>
//                         <li>
//                         <a
//                             href="#"
//                             className="text-blue-500 text-green-900 font-bold text-xl hover:text-green-900"
//                         >
//                             items
//                         </a>
//                         </li>
//                     </ul>
//                     </nav>
//                     <div>
//                 <a href="#">
//                     <span className="material-symbols-outlined font-bold items-center justify-center text-2xl text-green-900">
//                     add_shopping_cart
//                     </span>{' '}
//                     Carts
//                 </a>
//                 </div>
//             </div>
//             </section>
//              <section className='flex p-6 my-auto gap-5 justify-between rounded-lg m-7'>
//                 <div class="border-2 border-gray-200 shadow-md flex gap-9">
//                      <div className="flex flex-col ">
//                     <h2 className='text-black m-3 px-4 text-xs font-bold'>Review item And Shipping</h2>
//                     <img src='./images/headphone.jpg' alt='headphone' className='w-[400px] h-auto object-cover m-4 mb-4'/>
//                     </div>
//                     <div className='flex justify-between items-center gap-14'>
//                     <h2>headphone</h2>
//                     <span>$999</span>
//                     </div>
//                     {/* <div className='flex justify-between items-center gap-14'>
//                     <h2>headphone</h2>
//                     <span>$999</span>
//                     </div> */}
//                 </div>
//                 <div class="border-2 border-gray-200 shadow-md">
//                     <h2 className='text-black m-3 px-4 font-bold'>Payement Details</h2>
//                     <div className='m-3'>
//                         <p>Card Number: **** **** **** 1234</p>
//                         <p>Expiry Date: 12/24</p>
//                         <p>CVV: ***</p>
//                     </div>
//                 </div>
//             </section>   
//         </div>
//     )
// }


import React from 'react';

const HeadphonesShop = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans bg-white">
      {/* Bannière promotionnelle */}
      <div className="bg-blue-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-2">Grab Upto 50% Off On Selected Headphone</h1>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
          Buy Now
        </button>
      </div>

      {/* Filtres */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Headphones Type</h2>
        <div className="flex flex-wrap gap-4">
          {['Phone', 'Rename', 'Other', 'Material', 'Office', 'A4 Teams'].map((type) => (
            <button 
              key={type}
              className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Titre section produits */}
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">Headphones For You!</h2>

      {/* Liste des produits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Produit 1 */}
        <div className="border rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">Wireless Earbuds, BXB</h3>
              <p className="text-gray-600 text-sm">Guyana Collins, LiveTech Hardfield</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">M&E to Cafe</span>
          </div>
        </div>

        {/* Produit 2 */}
        <div className="border rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">AdPods Max</h3>
              <p className="text-gray-600 text-sm">A perfect feature of highly fluidity, public</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AdH to Cafe</span>
          </div>
        </div>

        {/* Produit 3 */}
        <div className="border rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">Side Bit Earphones</h3>
              <p className="text-gray-600 text-sm">Solar, with an ancillary tailored personalized</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AdH to Cafe</span>
          </div>
        </div>

        {/* Produit 4 */}
        <div className="border rounded-lg p-4 hover:shadow-md transition">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg">Y3B**</h3>
              <p className="text-gray-600 text-sm">WYSTOX Headphones</p>
              <p className="text-gray-600 text-sm mt-1">What's Phone Managing With Me!</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AdH to Cafe</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadphonesShop;