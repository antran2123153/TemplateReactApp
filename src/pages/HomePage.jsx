import {
  Banner,
  HotProducts,
  ContactHome,
  OutTeam,
  TypeProduct,
} from "components";
import React from "react";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <main>
      <Banner />
      <HotProducts />
      <TypeProduct />
      <ContactHome />
      <OutTeam />
    </main>
  );
}

export default HomePage;
