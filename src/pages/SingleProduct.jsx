import React from "react";
import {
  SingleProductBody,
  SingleProductHeader,
  SliderProductPage,
  SliderListProduct,
} from "../components";

SingleProduct.propTypes = {};

function SingleProduct(props) {
  return (
    <main>
      <SingleProductHeader />
      <SliderProductPage />
      <SingleProductBody />
      <SliderListProduct />
    </main>
  );
}

export default SingleProduct;
