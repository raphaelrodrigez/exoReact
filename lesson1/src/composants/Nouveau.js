import React from 'react';

export default function Nouveau({formRef, newUser, handleCloses, handleSubmit, idEdite, setIdEdite, handleChange }) {
  return (
    <div className="my-8">
      <h2 className="flex justify-center relative  font-bold text-3xl">Nouvel article</h2>
      <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col gap-5 justify-center items-center p-8 rounded-lg bg-blue-300 mt-9 max-w-md mx-auto">
        <input
          className="hover:border-2 rounded-lg p-2 border-green-400 w-full"
          onChange={handleChange}
          name="imageFile"
          type="file"
          accept="image/*"
        />
        {newUser.imageUrl && (
          <img src={newUser.imageUrl} alt="Aperçu" className="w-32 h-32 object-cover mt-2 rounded" />
        )}
        <input
          className="hover:border-2 rounded-lg p-2 border-green-400 w-full"
          onChange={handleChange}
          value={newUser.name}
          name="name"
          type="text"
          placeholder="Nom de l'article"
        />
        <input
          className="hover:border-2 rounded-lg p-2 border-green-400 w-full"
          onChange={handleChange}
          value={newUser.prix}
          name="prix"
          type="number"
          placeholder="Prix de l'article"
        />
        <div className="flex sm:flex-row gap-7">
        <button
            type="submit"
            className="bg-green-900 rounded-lg p-3 text-white hover:bg-green-600 w-full sm:w-auto"
        >
            {idEdite ? "Modifier" : "Ajouter"}
        </button>
        {idEdite && (
            <button className="bg-red-900 rounded-lg p-3 text-white hover:bg-red-600 w-full sm:w-auto" onClick={handleCloses}>
            Annuler
            </button>
        )}
        </div>


      </form>
    </div>
  );
}
