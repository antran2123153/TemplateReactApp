import React from "react";
import { bannerHome } from "utils/homeInfo";
import "./Banner.scss";

function Banner() {
  return (
    <section>
      <div className="banner">
        <h3 className="banner__header">{bannerHome.title}</h3>
        <p className="banner__text">{bannerHome.text}</p>
        <div className="banner__search">
          <h5 className="banner__search-text">{bannerHome.searchTitle}</h5>
          <input type="text" className="banner__search-input" />
          <button className="banner__search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
