import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Nouveau from './Nouveau';
import Paniers from './Paniers';
import PaymentPage from './PaymentPage';

export default function Cards1() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState();
  const [idEdite, setIdEdite] = useState();
  const [cards, setCards] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    prix: "",
    imageFile: null,
    imageUrl: "",
    liked: false
  });

  const formRef = useRef(null);
  const formRef1 = useRef(null);
  // État pour stocker l'id de la carte survolée
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newUser.name || !newUser.prix || !newUser.imageUrl) {
      alert("Veuillez remplir tous les champs et ajouter une image.");
      return;
    }
    if (idEdite) {
      setData(data.map((item) =>
        item.id === idEdite
          ? {
            ...item,
            name: newUser.name,
            prix: newUser.prix,
            image: newUser.imageUrl || item.image,
            liked: false
          }
          : item
      ))
    } else {
      setData([
        ...data,
        {
          id: new Date().getTime(),
          name: newUser.name,
          prix: newUser.prix,
          image: newUser.imageUrl,
          liked: false
        }
      ]);
    }
    setNewUser({
      name: "",
      prix: "",
      imageFile: null,
      imageUrl: "",
      liked: false
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageFile") {
      const file = files[0]
      setNewUser((prev) => ({
        ...prev,
        imageFile: file,
        imageUrl: file ? URL.createObjectURL(file) : ''
      }))
    } else {
      setNewUser({
        ...newUser,
        [name]: value
      });
    }
  };

  const handleDelete = (id) => {
    const confirmSupp = window.confirm("vous etes sur de vouloir supprimer cet article ?");
    if (confirmSupp) {
      setData(data.filter((item) => (
        item.id !== id
      )))
    }
  }

  const handleEdite = (d) => {
    setIdEdite(d.id)
    setNewUser({
      name: d.name,
      prix: d.prix,
      imageUrl: d.image,
      imageFile: null
    })

    if (formRef.current) {
      formRef.current.scrollIntoView(); // Scroll fluide vers form
    }
  }

  const handlePaniersMoins = (card) => {
    const exist = cards.find((item) => (
      item.id === card.id
    ))
    if (exist) {
      setCards(cards.map((item) => (
        item.id === card.id ? {
          ...item,
          quantity: item.quantity - 1
        } : item
      )))
    } else {
      setCards([...cards, { ...card, quantity: 1 }])
    }
  }

  const handlePaniers = (d) => {
    const trouver = cards.find((card) => (
      card.id === d.id
    ))
    if (trouver) {
      setCards(cards.map((card) => (
        card.id === d.id ? {
          ...card,
          quantity: card.quantity + 1
        } : card
      )))
    } else {
      setCards([...cards, { ...d, quantity: 1 }])
    }
    if (formRef1.current) {
      formRef1.current.scrollIntoView();
    }
  }

  const handleCloses = () => {
    setIdEdite(null)
    setNewUser({
      name: "",
      prix: "",
      imageFile: null,
      imageUrl: ""
    });
  }

  const handleClose = (id) => {
    const confirmClose = window.confirm("vous etes sur de vouloir supprimer ce panier ??")
    if (confirmClose) {
      setCards(cards.filter((item) => (
        item.id !== id
      )))
    }
  }

  const total = cards.reduce((acc, card) =>
    acc + card.prix * card.quantity, 0
  )

  const toggleLike = (id) => {
    setData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  // const hankdeClick =()=>{
  //   navigate('./PaymentPage')
  // }
  return (
    <div className="scroll-smooth relative">

      <div>
        <section className="bg-white shadow-md mb-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between p-4 mb-4 px-4">
            <img className="w-15 h-20" src="./images/logo.jpg" alt="logo" />
            <nav>
              <ul className="flex space-x-4 relative">
                <li className="group relative">
                  <a
                    href="#"
                    className="text-blue-500 text-green-900 font-bold text-xl inline-flex items-center"
                  >
                    Categorie
                    <svg
                      className="ml-1 w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.25 7.5l4.5 4.5 4.5-4.5h-9z" />
                    </svg>
                  </a>
                  {/* Sous-menu */}
                  <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[150px] z-10">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-green-900 hover:bg-orange-200"
                      >
                        Sous-catégorie 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-green-900 hover:bg-orange-200"
                      >
                        Sous-catégorie 2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-green-900 hover:bg-orange-200"
                      >
                        Sous-catégorie 3
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>
            </nav>
            <div>
              <a href="PaymentPage" className="flex items-center" onClick={() => navigate('/PaymentPage', { state: { cartItems: cards, total } })}>
                <span className="material-symbols-outlined font-bold text-2xl text-green-900">
                  add_shopping_cart
                </span>{' '}
                {/* Carts{' '} */}
                {cards.length === 0 ? (
                  <h2 className='text-black-900 font-bold text-2xl bg-red-900 rounded-full p-1'>0</h2>
                ) : (
                  cards.map((card) => (
                    <span className='text-black-800 font-bold bg-red-700 rounded-full p-1' key={card.id}>{card.quantity}</span>
                  ))
                )}
              </a>

            </div>
          </div>
        </section>

        <section className='flex items-center p-6 my-auto gap-5 justify-between bg-blue-300 shadow-md rounded-lg p-6 m-7'>
          <div className='gap-9 flex flex-col'>
            <p className='text-mx font-bold text-green-900'>
              lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatum.
            </p>
            <button className='bg-green-900 rounded-full p-2 text-white hover:bg-green-600'>Buy now</button>
          </div>
          <div className="w-[720px] h-[160px] mx-auto relative">
            <img
              src="./images/shopping.png"
              alt="coin1111"
              className="w-full h-full object-contain translate-y-1 top-4 absolute"
            />
          </div>
        </section>

        {/* Nouveau (formulaire) */}
        <Nouveau
          newUser={newUser}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          idEdite={idEdite}
          setIdEdite={setIdEdite}
          handleCloses={handleCloses}
          formRef={formRef}
        />

        {/* Liste des produits */}
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map(d => (
            <div
              key={d.id}
              className="card bg-blue-200 rounded-xl shadow-md flex flex-col relative overflow-hidden"
            >
              <img className="w-full h-48 object-cover" src={d.image} alt={d.name} />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-2">
                  <span className="badge bg-green-100 px-2 py-1.5 rounded-md text-xs text-green-700">stock ready</span>
                  <span className="badge bg-blue-100 px-2 py-1.5 rounded-md text-xs text-blue-700">official store</span>
                </div>
                <h2 className="product-title text-lg font-semibold truncate" title={d.name}>{d.name}</h2>
                <div>
                  <span className="text-xl font-bold">{d.prix} $</span>
                </div>
                <span className="flex items-center mt-1 space-x-1">
                  <img src="./images/star.svg" alt="star" />
                  <img src="./images/star.svg" alt="star" />
                  <img src="./images/star.svg" alt="star" />
                  <img src="./images/star-half-fill.svg" alt="half star" />
                  <img src="./images/star-no-fill.svg" alt="no star" />
                  <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                </span>
                <div className="mt-5 flex gap-2 flex-wrap">
                  <button
                    className="button-primary bg-yellow-500/80 p-3 rounded-md text-white font-medium tracking-wider hover:bg-yellow-600 transition"
                    onClick={() => handlePaniers(d)}
                  >
                    Add to cart
                  </button>
                  <button
                    className="button-primary bg-red-800 px-4 py-2 rounded text-white hover:bg-red-500 transition"
                    onClick={() => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="button-primary bg-green-800 px-4 py-2 rounded text-white hover:bg-green-500 transition"
                    onClick={() => handleEdite(d)}
                  >
                    Edit
                  </button>
                  <button
                    className="button-icon bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
                    onClick={() => toggleLike(d.id)}
                  >
                    {d.liked ? "❤️" : "❤"}
                  </button>

                  {/* Bouton œil avec gestion hover popup */}
                  <button
                    className="button-icon bg-gray-200 p-2 rounded hover:bg-gray-300 transition relative"
                    onMouseEnter={() => setHoveredCardId(d.id)}
                    onMouseLeave={() => setHoveredCardId(null)}
                  >
                    <img className="opacity-50 w-5 h-5" src="./images/eye.svg" alt="eye" />
                  </button>
                </div>
              </div>

              {/* Popup pleine page qui survole tout */}
              {hoveredCardId === d.id && (
                <div
                  onMouseEnter={() => setHoveredCardId(d.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 p-4"
                >
                  <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 flex flex-col items-center">
                    <img
                      src={d.image}
                      alt={d.name}
                      className="w-52 h-32 object-cover rounded mb-4"
                    />
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">{d.name}</h2>
                    <p className="text-xl text-green-600 font-semibold mb-4 text-center">{d.prix} €</p>
                    <span className="flex items-center  space-x-1">
                      <img src="./images/star.svg" alt="star" />
                      <img src="./images/star.svg" alt="star" />
                      <img src="./images/star.svg" alt="star" />
                      <img src="./images/star-half-fill.svg" alt="half star" />
                      <img src="./images/star-no-fill.svg" alt="no star" />
                      <span className="text-xs ml-2 text-gray-500">20k reviews</span>
                    </span>
                    <button
                      onClick={() => setHoveredCardId(null)}
                      className="mt-4 px-5 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Panier */}
      <Paniers
        d={modal}
        formRef={formRef}
        idEdite={idEdite}
        setIdEdite={setIdEdite}
        cards={cards}
        setCards={setCards}
        handleClose={handleClose}
        handlePaniers={handlePaniers}
        total={total}
        handlePaniersMoins={handlePaniersMoins}
      />
      {/* <PaymentPage cards={cards} total={total} /> */}
    </div>
  );
}
