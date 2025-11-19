// const AdminPage = ()=>{
//     <h2 className="text-4xl">Admin Page - Accessible to Admin</h2>
// }
// export default AdminPage

// import React, { useContext } from "react";
// import { UserContext } from "../context/AuthContext";

// export default function AdminPage() {
//   const { user, logout } = useContext(UserContext);
//   return (
//     <div>
//       <h2>Admin Page - Accessible to Admin</h2>
//       <p>Bienvenue, {user.username} !</p>
//       <button onClick={logout}>Déconnexion</button>
//     </div>
//   );
// }

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductCard from "./ProductCard";

export default function AdminPage() {
  const { user, logout, products, addProduct, updateProduct, deleteProduct } = useContext(AuthContext);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: "", description: "", price: "", imageUrl: "" });

  const resetForm = () => {
    setForm({ name: "", description: "", price: "", imageUrl: "" });
    setEditingProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      updateProduct(editingProduct.id, { ...form, price: Number(form.price) });
    } else {
      addProduct({ ...form, price: Number(form.price) });
    }
    resetForm();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <p>Bienvenue, {user.username}</p>
      <button onClick={logout} style={{ marginBottom: 20 }}>Déconnexion</button>

      <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
        <h3>{editingProduct ? "Modifier un produit" : "Ajouter un produit"}</h3>
        <input
          placeholder="Nom"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          style={inputStyle}
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
          style={{ ...inputStyle, height: 80 }}
        />
        <input
          type="number"
          placeholder="Prix"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
          style={inputStyle}
        />
        <input
          placeholder="URL image"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          required
          style={inputStyle}
        />
        <button type="submit" style={{ ...inputStyle, cursor: "pointer" }}>
          {editingProduct ? "Modifier" : "Ajouter"}
        </button>
        {editingProduct && (
          <button type="button" onClick={resetForm} style={{ ...inputStyle, cursor: "pointer", backgroundColor: "#ccc" }}>
            Annuler
          </button>
        )}
      </form>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isAdmin={true}
            onEdit={handleEdit}
            onDelete={deleteProduct}
            onDetail={(p) => alert(`Détails :\n${p.name}\n${p.description}\nPrix : ${p.price} €`)}
          />
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  marginBottom: 10,
  padding: 8,
  fontSize: 16,
};

