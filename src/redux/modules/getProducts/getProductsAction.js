import axios from "axios";

const loading = () => ({
  type: "GET_PRODUCT_LIST_LOADING",
});

const success = (data) => ({
  type: "GET_PRODUCT_LIST_SUCCESS",
  payload: data,
});

const error = () => ({
  type: "GET_PRODUCT_LIST_ERROR",
});

export const getProducts = () => (dispatch) => {
  dispatch(loading());
  axios
    .get("http://78.46.253.40:3434/api/v1/products")
    .then((res) => {
        console.log("hello");
      dispatch(success(res.data));
    })
    .catch((err) => {
      dispatch(error());
    });
};

getProducts(); // {}
getProducts(); // {dispatch} => {}
