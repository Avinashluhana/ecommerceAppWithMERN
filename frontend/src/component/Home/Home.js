import React, { Fragment } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./Product";
import MetaData from "../layout/MetaData";

const product = {
  name: "T-shirt",
  image: [{ url: "http://i.ibb.co/DRST11N/1.webp" }],
  price: "200",
  _id: "av",
};
const Home = () => {
  return (
    <Fragment>
      <MetaData title="ECOMMERCE" />

      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>Find Amazing Products below</h1>
        <a href="#container">
          <button>Scroll</button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />

        <Product product={product} />
      </div>
    </Fragment>
  );
};

export default Home;
