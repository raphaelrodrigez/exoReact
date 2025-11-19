import React from  "react"
// import "./style.css"
import './index.css'
import Signup from './loginSignup/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./loginSignup/Login"
// import Cards from "./loginSignup/Cards"
import Tableau from "./composants/Tableau"
import Modal from "./composants/modal"
import Shoping from "./composants/PaymentPage"
import Panier from "./composants/Panier"
import Paniers from "./composants/Paniers"
import Payement from "./composants/PayementCard"
import Nouveau from "./composants/Nouveau"
import Exercice from "./composants/Exercice"
import Cards from "./composants/Cards1"
import PaymentPage from "./composants/PaymentPage"
import Text1 from "./composants/text1"
import TableExo from "./composants/TableExo"
import TableExo2 from "./composants/TableExo2"

export default function App(){
  // const [cards, setCards] = React.useState([])

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/exo" element={<Exercice/>}/>
      {/* <Route path="/Card" element={<Cards/>}/> */}
      <Route path="/table" element={<Tableau/>}/>
      <Route path="/modal" element={<Modal/>}/>
      <Route path="/PaymentPage" element={<PaymentPage/>}/>
      <Route path="/Panier" element={<Panier/>}/>
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Paniers" element={<Paniers />} />
      <Route path="/Payement" element={<Payement/>}/>
      <Route path="/Nouveau" element={<Nouveau/>}/>
      <Route path="/Text1" element={<Text1/>}/>
      <Route path="/TableExo" element={<TableExo/>}/>
      <Route path="/TableExo2" element={<TableExo2/>}/>
    </Routes>
    </BrowserRouter>
   )
}