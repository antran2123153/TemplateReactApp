import React from "react";
import "./SingleProductBody.scss";

SingleProductBody.propTypes = {};

function ImageBox(props) {
  return (
    <div className="container imagebox">
      <img src={props.url} alt="" className="imagebox__img" />
      <span className="imagebox__header">Hình: {props.header}</span>
    </div>
  );
}

function TextBox(props) {
  return (
    <div className="container textbox">
      <h5 className="textbox__header">{props.header}</h5>
      <p className="textbox__text">{props.text}</p>
    </div>
  );
}

function SingleProductBody(props) {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, totam autem molestias sunt enim consectetur iusto at, tempore quos minus culpa odio, aliquam voluptatum. Dignissimos quam sequi deleniti. Est, neque.";
  const header = "Header Item Name";
  const url =
    "https://materializecss.com/templates/parallax-template/background1.jpg";

  return (
    <section>
      <div className="singleproduct__body">
        <div className="container">
          <div className="singleproduct__body-content">
            <TextBox text={text} header={header} />
            <TextBox text={text} header={header} />
            <TextBox text={text} header={header} />
          </div>
          <div className="singleproduct__body-content">
            <TextBox text={text} header={header} />
            <TextBox text={text} header={header} />
            <TextBox text={text} header={header} />
          </div>
          <div className="singleproduct__body-content">
            <ImageBox url={url} header={header} />
            <TextBox text={text} header={header} />
            <TextBox text={text} header={header} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProductBody;
