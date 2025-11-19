import React from "react";

function VlogList({ vlogs, onEdit }) {
  const handleImageClick = (id) => {
    alert("Image cliquée, ID : " + id);
  };

  return (
    <div>
      {vlogs.map(vlog => (
        <div key={vlog.id} style={{border: "1px solid #ccc", marginBottom: 10, padding: 10}}>
          <h2>{vlog.titre}</h2>
          <img
            src={vlog.image}
            alt={vlog.titre}
            style={{maxWidth: "100%", cursor: "pointer"}}
            onClick={() => handleImageClick(vlog.id)}
          />
          <p>{vlog.description}</p>
          <p><strong>ID :</strong> {vlog.id}</p>
          <button onClick={() => onEdit(vlog.id)}>Modifier</button>
        </div>
      ))}
    </div>
  );
}

export default VlogList;
