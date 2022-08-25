import React, { Fragment } from "react";
import Loader from "../layout/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../Redux/actions/productAction";
import { useEffect } from "react";
const Products = () => {
  const disptach = useDispatch();
  const { products, loading, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect = (() => {
    disptach(getProduct())
  },[disptach])
  return <Fragment>{loading ? <Loader /> : <Fragment></Fragment>}</Fragment>;
};

export default Products;
