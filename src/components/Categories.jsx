import { useState } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
function Categories() {
  const [activeCategory, setActiveCatefory] = useState(0);
  const onClickCategory = (index) => setActiveCatefory(index);
  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li
            key={index}
            className={activeCategory === index ? "active" : ""}
            onClick={() => onClickCategory(index)}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
