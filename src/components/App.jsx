import "../scss/app.scss";
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import Card from "./Card";

function App() {
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
            <Card title={"Мексиканская"} price={500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
