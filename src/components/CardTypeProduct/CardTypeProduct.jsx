import React from "react";
import PropTypes from "prop-types";
import "./CardTypeProduct.scss";

CardTypeProduct.propTypes = {
  num: PropTypes.string,
  name: PropTypes.string,
};
CardTypeProduct.defaultProps = {
  num: "12 properties",
  name: "Chiacgo",
};

function CardTypeProduct(props) {
  const { num, name } = props;
  return (
    <div className="cardtype">
      <div className="cardtype__gray"></div>
      <div className="cardtype__top">
        <p className="cardtype__top-num">{num}</p>
        <h2 className="cardtype__top-name">{name}</h2>
      </div>
      <div className="cardtype__bot">MORE DETAIL</div>
    </div>
  );
}

export default CardTypeProduct;
