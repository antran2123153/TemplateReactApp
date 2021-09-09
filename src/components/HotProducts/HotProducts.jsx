import React from "react";
import { hotProductHome } from "utils/homeInfo";
import CardProduct from "../CardProduct/CardProduct";
import "./HotProducts.scss";

HotProducts.propTypes = {};

function HotProducts(props) {
  return (
    <section>
      <div className="hotproducts">
        <div className="container">
          <div className="home__header">
            <h2 className="home__header-title">{hotProductHome.title}</h2>
            <p className="home__header-text">{hotProductHome.text}</p>
          </div>
          <div className="hotproducts__list">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotProducts;
