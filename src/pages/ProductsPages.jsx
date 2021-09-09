import CardProduct from "components/CardProduct/CardProduct";
import React, { useState } from "react";

ProductsPages.propTypes = {};

function ProductsPages(props) {
  const [visible, setVisible] = useState(8);

  const products = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  const showMoreProducts = () => {
    setVisible((oldValue) => oldValue + 4);
  };

  return (
    <main>
      <div className="container">
        <hr />
        <h2 className="m-3" style={{ textAlign: "center" }}>
          OUR PRODUCTS
        </h2>
        <hr />
        <div className="row">
          {products.slice(0, visible).map((product) => {
            return (
              <div
                key={product}
                className="col-10 col-md-6 col-lg-3 mx-auto mb-3"
              >
                <CardProduct />
              </div>
            );
          })}
        </div>
        {visible === products.length ? null : (
          <div className="row">
            <div
              style={{ textAlign: "center" }}
              className="col-10 mx-auto pt-3"
            >
              <hr />
              <button onClick={showMoreProducts} className="btn btn-grey mb-5">
                show more
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default ProductsPages;
