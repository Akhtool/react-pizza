import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Card";
import CardLoader from "../components/loaders/CardLoader";

const Main = ({isCardsLoading, pizzas}) => {
    return (
        <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isCardsLoading
              ? [...new Array(8)].map((_, index) => <CardLoader key={index} />)
              : pizzas.map((item, index) => (
                  <Card {...item} key={item.id + index} />
                ))}
          </div>
        </div>
      </div>
    );
}

export default Main;