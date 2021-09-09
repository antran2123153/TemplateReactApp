import React from "react";
import "./SingleProductHeader.scss";
import {
  BsBriefcase,
  BsBuilding,
  BsChevronRight,
  BsFillCalendarFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

SingleProductHeader.propTypes = {};

function SingleProductHeader(props) {
  return (
    <section className="singleproduct__header">
      <div className="container">
        <div className="singleproduct__header__top">
          <div className="singleproduct__header__top-router">
            <Link to="/">Home</Link>
            <BsChevronRight />
            <Link to="/">Product list</Link>
            <BsChevronRight /> Product
          </div>
          <div>
            <BsFillCalendarFill className="singleproduct__header__top-icon" />
            <BsBriefcase className="singleproduct__header__top-icon" />
            <BsBuilding className="singleproduct__header__top-icon" />
          </div>
        </div>
        <div className="singleproduct__header__center">
          <div className="singleproduct__header__center-name">
            <h1>Renovated Studio</h1>
            <span className="singleproduct__header__center-name-icon1">
              FEATURED
            </span>
            <span className="singleproduct__header__center-name-icon2">
              FOR SALE
            </span>
          </div>
          <div className="singleproduct__header__center-price">
            <h1>$540,000</h1>
          </div>
        </div>
        <div className="singleproduct__header__bot">
          <span>194 Mercer Street, 627 Broadway, New York, NY 10012, USA</span>
          <span>$3,700/sq ft</span>
        </div>
      </div>
    </section>
  );
}

export default SingleProductHeader;
