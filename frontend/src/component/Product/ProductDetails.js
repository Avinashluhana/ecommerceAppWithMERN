import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getProductDetails,
} from "../../Redux/actions/productAction";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const {id} = useParams;
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch,id]);
  // const alert = useAlert();
  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {/* {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))} */}
          </Carousel>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
