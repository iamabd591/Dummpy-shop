import { reject, request, success } from "./builder";
import { getRequest, getRequestById } from "../utils/utils";

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
    // console.log(error);
    dispatch(reject({ type: "GET_PRODUCTS_FAILURE", error: error }));
  }
};

export const getFakeAPIProducts = () => async (dispatch) => {
  dispatch(request({ type: "GET_FAKE_PRODUCTS_REQUEST" }));
  try {
    const fakeProduts = await getRequest({
      url: "https://fakestoreapi.com/products",
    });
    // console.log(fakeProduts);
    dispatch(
      success({ type: "GET_FAKE_PRODUCTS_SUCCESS", payload: fakeProduts })
    );
  } catch (error) {
    dispatch(reject({ type: "GET_FAKE_PRODUCTS_FAILURE", error: error }));
  }
};

export const getProductsById = (id) => async (dispatch) => {
  dispatch(request({ type: "GET_PRODUCTS_REQUEST_BY_ID" }));
  try {
    const productById = await getRequestById({
      url: `https://dummyjson.com/products/${id}`,
    });
    dispatch(
      success({ type: "GET_PRODUCTS_SUCCESS_BY_ID", payload: productById })
    );
  } catch (error) {
    // console.log(error);
    dispatch(reject({ type: "GET_PRODUCTS_FAILURE_BY_ID", error: error }));
  }
};
export const getFakeAPIProductsByID = (id) => async (dispatch) => {
  dispatch(request({ type: "GET_FAKE_PRODUCTS_REQUEST_BY_ID" }));
  try {
    const fakeProdutsByID = await getRequestById({
      url: `https://fakestoreapi.com/products/${id}`,
    });
    dispatch(
      success({
        type: "GET_FAKE_PRODUCTS_SUCCESS_BY_ID",
        payload: fakeProdutsByID,
      })
    );
  } catch (error) {
    dispatch(reject({ type: "GET_FAKE_PRODUCTS_FAILURE_BY_ID", error: error }));
  }
};
