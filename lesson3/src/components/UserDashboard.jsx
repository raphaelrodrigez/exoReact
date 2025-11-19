import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ProductCard from "./ProductCard";

export default function UserDashboard() {
  const { user, logout, products } = useContext(AuthContext);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Dashboard</h1>
      <p>Bienvenue, {user.username}</p>
      <button onClick={logout} style={{ marginBottom: 20 }}>
        Déconnexion
      </button>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isAdmin={false}
            onDetail={(p) =>
              alert(`Détails :\n${p.name}\n${p.description}\nPrix : ${p.price} €`)
            }
          />
        ))}
      </div>
    </div>
  );
}
