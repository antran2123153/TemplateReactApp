import React, { useState } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { navbarLinks } from "../../utils/navbarLinks";
import "./Navbar.scss";
import { BiGridAlt } from "react-icons/bi";

Header.propTypes = {};

function Header(props) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header className="sticky">
      <div className="navbar">
        <div className="container">
          <Link to="/" className="navbar__logo">
            HOUZEZ
          </Link>
          <div className="navbar__links">
            {navbarLinks.map((link) => {
              const { id, text, path } = link;
              return (
                <li key={id} className="navbar__link">
                  <Link to={path}>{text}</Link>
                </li>
              );
            })}
            <a href="tel:0376102927" className="navbar__icons">
              <AiOutlinePhone style={{ fontSize: "20pt" }} />
            </a>
            <button className="navbar__btn">CREATE A LISTING</button>
          </div>
          <div className="navbar__menu-icon">
            <BiGridAlt style={{ fontSize: "20pt" }} onClick={handleOpenMenu} />
          </div>
          {openMenu && (
            <div className="navbar__hiden">
              {navbarLinks.map((link) => {
                const { id, text, path } = link;
                return (
                  <li
                    key={id}
                    className="navbar__hiden__link"
                    onClick={handleOpenMenu}
                  >
                    <Link to={path}>{text}</Link>
                  </li>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
