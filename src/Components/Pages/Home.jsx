import Pizzablock from "../PizzzaBlock";
import Sort from "../Sort";
import Categories from "../Categories";
import axios from "axios";
import LoadingBlock from "../PizzzaBlock/LoadingBlock";
import { useEffect, useState } from "react";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://64759fa8e607ba4797dc2e63.mockapi.io/items")
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      });
      window.scrollTo(0, 0)
  }, []);


  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)
          : data.map((obj, i) => <Pizzablock key={i} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
