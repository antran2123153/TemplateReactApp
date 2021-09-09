import React from "react";
import PropTypes from "prop-types";

import "./CardOutTeam.scss";

CardOutTeam.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

CardOutTeam.defaultProps = {
  img: "https://432351-1355220-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/02/agent-1-150x150.jpg",
  name: "Brittany Watkins",
  title: "Company Agent , All American Real Estate",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus portajusto eget risus consectetur,...",
  url: "/",
};

function CardOutTeam(props) {
  const { img, name, title, text, url } = props;
  return (
    <div className="teamhome__card">
      <img src={img} alt="" className="teamhome__card-img" />
      <div>
        <a href={url} className="teamhome__card-name">
          {name}
        </a>
      </div>
      <h2 className="teamhome__card-title">{title}</h2>
      <p className="teamhome__card-text">{text}</p>
      <a href={url} className="teamhome__card-name">
        View Profile
      </a>
    </div>
  );
}

export default CardOutTeam;
