import CardProduct from "components/CardProduct/CardProduct";
import React from "react";
import Slider from "react-slick";
import "./SliderListProduct.scss";

SliderListProduct.propTypes = {};

function SliderListProduct(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <div className="sliderproduct">
        <div className="container">
          <h2 className="sliderproduct__header">Sản phẩm liên quan</h2>
          <div className="sliderproduct__items">
            <Slider {...settings}>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
              <div className="sliderproduct__item">
                <CardProduct />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderListProduct;
