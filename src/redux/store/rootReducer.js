import { combineReducers } from "redux";
import { getProductReducer } from "../modules/getProducts/getProductsReducer";

export const rootReducer = combineReducers({
    products:getProductReducer,
})