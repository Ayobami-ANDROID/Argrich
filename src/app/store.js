import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../src/features/auth/authSlice";
import productReducer from "../../src/features/product/productSlice";
import cartReducer from "../../src/features/cart/cartSlice"
import categoryReducer from "../features/category/categorySlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    product:productReducer,
    cart:cartReducer,
    category:categoryReducer
  },
});


export default store;
