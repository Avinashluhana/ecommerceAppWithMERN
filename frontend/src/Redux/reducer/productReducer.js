import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
} from "../constants/productConstants";

export const productReduce =
  ((state = { products: [] }),
  (action) => {
    switch (action.type) {
      case ALL_PRODUCTS_REQUEST:
        return {
          loading: true,
          product: [],
        };

      case ALL_PRODUCTS_SUCCESS:
        return {
          loading: false,
          product: action.payload.products,
          productCount: action.payload.productCount,
        };
      case ALL_PRODUCTS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

      default:
        break;
    }
  });
