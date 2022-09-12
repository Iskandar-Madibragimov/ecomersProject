const defaultState = {
    loading: false,
    success: false,
    error: false,
    data: null,
  };
  
  export const getProductReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "GET_PRODUCT_LIST_LOADING":
        return {
          loading: true,
          succes: false,
          error: false,
          data: null,
        };
  
      case "GET_PRODUCT_LIST_SUCCESS":
        return {
          loading: false,
          success: true,
          error: false,
          data: action.payload,
        };
  
      case "GET_PRODUCT_LIST_ERROR":
        return {
          loading: false,
          success: false,
          error: true,
          data: null,
        };
  
      default:
        return state;
    }
  };
  