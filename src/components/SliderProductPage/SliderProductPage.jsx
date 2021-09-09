import React from "react";
import Slider from "react-slick";
import "./SliderProductPage.scss";

SliderProductPage.propTypes = {};

function SliderProductPage(props) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };

  const url =
    "https://materializecss.com/templates/parallax-template/background1.jpg";

  return (
    <section>
      <div className="sliderproduct">
        <div className="container">
          <h2 className="sliderproduct__header"> Single Item</h2>
          <div className="sliderproduct__items">
            <Slider {...settings}>
              <div className="sliderproduct__item">
                <img src={url} alt="" className="sliderproduct__item-img" />
              </div>
              <div className="sliderproduct__item">
                <img src={url} alt="" className="sliderproduct__item-img" />
              </div>
              <div className="sliderproduct__item">
                <img src={url} alt="" className="sliderproduct__item-img" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderProductPage;
