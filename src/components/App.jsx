import "../scss/app.scss";
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = useState([]);

  const PIZZAS_URL = "http://localhost:3000/pizzas";

  const getPizzaCards = () => {
    axios
      .get(PIZZAS_URL)
      .then((res) => setPizzas(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPizzaCards();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((item) => (
              <Card {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
