import React from "react";
import PropTypes from "prop-types";
import {
  IoIosAddCircleOutline,
  IoIosCellular,
  IoMdContacts,
} from "react-icons/io";
import "./CardProduct.scss";
import { Link } from "react-router-dom";

CardProduct.propTypes = {
  topLeft: PropTypes.string,
  topRight: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  type: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
};

CardProduct.defaultProps = {
  topLeft: "FEATURED",
  topRight: "FOR SALE",
  price: "$4,500/mol",
  title: "Light and modern apartment",
  address: "2436 SW 8th St, Miami, FL 33135, USA",
  type: "APARTMENT",
  author: "Mikel Michellin",
  time: "1 year ago",
  img: "https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/03/043-768x576.jpg",
  url: "/product",
};

function CardProduct(props) {
  const {
    topLeft,
    topRight,
    price,
    title,
    address,
    type,
    author,
    time,
    img,
    url,
  } = props;
  return (
    <div className="cardproduct">
      <div className="cardproduct__top">
        <Link to={url}>
          <img src={img} alt="" className="cardproduct__top-img" />
        </Link>
        <span className="cardproduct__top-left">{topLeft}</span>
        <span className="cardproduct__top-right">{topRight}</span>

        <span className="cardproduct__top-price">{price}</span>
        <span className="cardproduct__top-get">
          <IoIosAddCircleOutline /> GET
        </span>
      </div>
      <div className="cardproduct__body">
        <h2 className="cardproduct__body-title">
          <Link to={url}>{title}</Link>
        </h2>
        <p className="cardproduct__body-address">
          <IoIosCellular /> {address}
        </p>
        <p className="cardproduct__body-type">{type}</p>
      </div>
      <hr />
      <div className="cardproduct__end">
        <span className="cardproduct__end-left">
          <IoMdContacts /> {author}
        </span>
        <span className="cardproduct__end-right">{time}</span>
      </div>
    </div>
  );
}

export default CardProduct;
