import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "rgba(20,20,20,0.1)",
  activeColor: "tomato",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 3.5,
  isHalf: true,
};
const Product = ({ product }) => {
  return (
    <div className="productCard" to={Product._id}>
      <img src={product.image[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> <span>(200 Reviews)</span>
      </div>
      <span>{product.price}</span>
    </div>
  );
};

export default Product;
