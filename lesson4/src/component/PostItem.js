// import React from "react";

// export default function PostItem({post, handleLike, handleEdit, handleDelete}){
//   return (
//   <div className="container">
//     <h2>{post.title} <br/> ID:{post.id}</h2>
//     {post.imageUrl && (
//       <img src={post.imageUrl} width={550}/>
//     )}
//     <h2>{post.description}</h2>
//     <p>Like: {(post.likes || 0)}</p>
//     <button onClick={()=> handleLike(post.id)}>Like</button>
//     <button onClick={()=> handleEdit(post)}>Modifier</button>
//     <button className="btnDelete" onClick={()=> handleDelete(post.id)}>Supprimer</button>
//   </div>
// )
// }

























// // import React from 'react';

// // export default function PostItem({ post, handleLike, handleEdit }) {
// //   return (
// //     <div style={{ border: "1px solid #ccc", marginBottom: 15, padding: 10 }}>
// //       <h2>{post.title} (ID: {post.id})</h2>
// //       {post.imageUrl && (
// //         <img src={post.imageUrl} alt={post.title} style={{ width: 200 }} />
// //       )}
// //       <p>{post.description}</p>
// //       <p>Likes: {post.likes || 0}</p>
// //       <button onClick={() => handleLike(post.id)}>❤️ Like</button>
// //       <button onClick={() => handleEdit(post)}>✏️ Modifier</button>
// //     </div>
// //   );
// // }
