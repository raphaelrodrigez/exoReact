import React, { useState, useEffect } from "react";

function VlogForm({ onSave, initialData }) {
  const [titre, setTitre] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitre(initialData.titre);
      setImage(initialData.image);
      setDescription(initialData.description);
    } else {
      setTitre("");
      setImage("");
      setDescription("");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre || !image || !description) return;
    onSave({
      id: initialData ? initialData.id : undefined,
      titre,
      image,
      description,
    });
    setTitre("");
    setImage("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{marginBottom: 20}}>
      <input
        type="text"
        placeholder="Titre"
        value={titre}
        onChange={e => setTitre(e.target.value)}
        required
      /><br />
      <input
        type="text"
        placeholder="URL de l'image"
        value={image}
        onChange={e => setImage(e.target.value)}
        required
      /><br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      /><br />
      <button type="submit">{initialData ? "Modifier" : "Ajouter"}</button>
    </form>
  );
}

export default VlogForm;
