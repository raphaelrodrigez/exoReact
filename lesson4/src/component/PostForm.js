// import React from 'react';

// export default function PostForm({newPost, editingId, handleInputChange, handleSubmit, handleCancel}) {
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text" name="title" placeholder="Titre" value={newPost.title} onChange={handleInputChange} />
//       <input type="file" name="imageFile" accept="image/*" onChange={handleInputChange} />
//       {newPost.imageUrl && (
//         <img src={newPost.imageUrl} alt="Aperçu" style={{ width: 150 }} />
//       )}
//       <textarea name="description" placeholder="Description" value={newPost.description} onChange={handleInputChange}/>
//       <div>
//         <button className='btnModif' type="submit">
//           {editingId ? 'Mettre à jour' : 'Ajouter'}
//         </button>
//         {editingId && (
//           <button className='btnAnnuler' type="button" onClick={handleCancel}>
//             Annuler
//           </button>
//         )}
//       </div>
//     </form>
//   );
// }

