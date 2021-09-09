import React from "react";
import "./OutTeam.scss";
import CardOutTeam from "../CardOutTeam/CardOutTeam";
import { outTeamHome } from "utils/homeInfo";

OutTeam.propTypes = {};

function OutTeam(props) {
  return (
    <section>
      <div className="teamhome">
        <div className="teamhome__header">
          <h1 className="home__header-title">{outTeamHome.title}</h1>
          <p className="home__header-text">{outTeamHome.text}</p>
        </div>
        <div className="container teamhome__list">
          <CardOutTeam />
          <CardOutTeam />
          <CardOutTeam />
          <CardOutTeam />
        </div>
      </div>
    </section>
  );
}

export default OutTeam;
