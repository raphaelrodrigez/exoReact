import React from "react";

export default function ProductCard({ product, isAdmin, onEdit, onDelete, onDetail }) {
  return (
    <div style={styles.card}>
      <img src={product.imageUrl} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>{product.price} €</b></p>
      <button style={styles.button} onClick={() => onDetail(product)}>
        Détails
      </button>
      {isAdmin && (
        <>
          <button style={styles.button} onClick={() => onEdit(product)}>
            Modifier
          </button>
          <button style={{ ...styles.button, backgroundColor: "#e74c3c" }} onClick={() => onDelete(product.id)}>
            Supprimer
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: 15,
    margin: 10,
    width: 220,
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    borderRadius: 6,
  },
  button: {
    margin: "5px 5px 0 0",
    padding: "8px 12px",
    cursor: "pointer",
    border: "none",
    borderRadius: 4,
    backgroundColor: "#3498db",
    color: "white",
  },
};
