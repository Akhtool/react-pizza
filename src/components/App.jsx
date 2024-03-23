import "../scss/app.scss";
import Header from "./Header";
import Main from '../pages/Main'
import Cart from '../pages/Cart'
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom'

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [isCardsLoading, setIsCardsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const PIZZAS_URL = "http://localhost:3000/pizzas";
  const CART_ITEMS_URL = "http://localhost:3000/cartItems";

  const getPizzaCards = () => {
    axios
      .get(PIZZAS_URL)
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err))
      .finally(() => {
        setTimeout(() => {
          setIsCardsLoading(false);
        }, 1000);
      });
  };

  const getCartItems = () => {
    axios.get(CART_ITEMS_URL)
    .then((res) => setCartItems(res.data))
    .catch((err) => console.log(err))
    .finally(() => console.log('DONE'));
  }
 
  useEffect(() => {
    getPizzaCards();
    getCartItems();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main pizzas={pizzas} isCardsLoading={isCardsLoading}/>} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />}/>
      </Routes>
    </div>
  );
}

export default App;
