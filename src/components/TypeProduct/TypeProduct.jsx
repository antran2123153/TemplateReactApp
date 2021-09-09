import React from "react";
import "./TypeProduct.scss";
import CardTypeProduct from "../CardTypeProduct/CardTypeProduct";
import { typeProductHome } from "utils/homeInfo";

TypeProduct.propTypes = {};

function TypeProduct(props) {
  return (
    <section>
      <div className="container">
        <div className="typeproduct">
          <div className="typeproduct__header">
            <h1 className="home__header-title">{typeProductHome.title}</h1>
            <p className="home__header-text">{typeProductHome.text}</p>
          </div>
          <div className="typeproduct__list">
            <CardTypeProduct />
            <CardTypeProduct />
            <CardTypeProduct />
            <CardTypeProduct />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypeProduct;
