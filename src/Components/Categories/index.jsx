import { useState } from "react";

const Categories = () => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => setActiveIndex(index);

  return (
    <div className="categories">
      <ul>
        {categories.map((obj, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
