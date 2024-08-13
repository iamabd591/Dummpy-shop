import { reject, request, success } from "./builder";
import { getRequest } from "../utils/utils";

export const ThemeChanger = (value) => async (dispatch) => {
  dispatch({
    type: "ThemeChanger",
    payload: value,
  });
};

export const getProducts = (_) => async (dispatch) => {
  dispatch(request({ type: "GET_PRODUCTS_REQUEST" }));
  try {
    const products = await getRequest({
      url: "https://dummyjson.com/products",
    });
    // console.log(products)
    dispatch(success({ type: "GET_PRODUCTS_SUCCESS", payload: products }));
  } catch (error) {
    console.log(error);
    dispatch(reject({ type: "GET_PRODUCTS_FAILURE", error: error }));
  }
};
