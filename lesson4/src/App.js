// import { useState } from 'react';
// import PostForm from './component/PostForm';
// import PostList from './component/PostList';


// export default function App() {
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState({
//     title: '',
//     imageFile: null,
//     imageUrl: '',
//     description: ''
//   });
//   const [editingId, setEditingId] = useState(null);

//   const handleInputChange = (e)=>{
//     const {name, value, files} = e.target
//     if(name === "imageFile"){
//       const file = files[0]
//       setNewPost(prev=>({
//         ...prev,
//         imageFile : file,
//         imageUrl : file ? URL.createObjectURL(file) : ''
//       }))
//     }else{
//       setNewPost(prev=>({
//         ...prev,
//         [name]:value
//       }))
//     }
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!newPost.title || !newPost.imageUrl || !newPost.description) {
//       alert("Remplissez tous les champs svp !");
//       return;
//     }

//     if (editingId) {
//       //modification
//       setPosts(posts.map(post =>
//         post.id === editingId
//           ? { ...post, ...newPost }
//           : post
//       ));
//     } else {
//       //Ajouter
//       setPosts([...posts, {
//         id: Date.now(),
//         ...newPost,
//         likes: 0
//       }]);
//     }

//     setNewPost({ title: '', imageFile: null, imageUrl: '', description: '' });
//     setEditingId(null);
//   };

//   const handleLike = (id) => {
//     setPosts(posts.map(post =>
//       post.id === id
//         ? { ...post, likes: (post.likes || 0) + 1 }
//         : post
//     ));
//   };

//   const handleEdit = (post) => {
//     setNewPost({
//       title: post.title,
//       imageFile: null,
//       imageUrl: post.imageUrl,
//       description: post.description
//     });
//     setEditingId(post.id);
//   };

//   const handleDelete =(id)=>{
//     setPosts(posts.filter(post=> post.id !== id))
//   }
//   const handleCancel = () => {
//     setNewPost({ title: '', imageFile: null, imageUrl: '', description: '' });
//     setEditingId(null);
//   };

//   return (
//     <div className="App" style={{ maxWidth: 600, margin: "auto" }}>
//       <h1 >Mon Vlog </h1>
//       <PostForm newPost={newPost} editingId={editingId} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/>
//       <PostList posts={posts} handleLike={handleLike} handleEdit={handleEdit} handleDelete={handleDelete}/>
//     </div>
//   );
// }
