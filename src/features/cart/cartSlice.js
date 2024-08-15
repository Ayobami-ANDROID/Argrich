import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";


const initialState = {
    carts:[],
    cart:{},
    isLoading:fasle
}

export const getCart  = createAsyncThunk(
    "/products/cart/",
    async (_,thunkAPI) => {
        try {
            const response = await cartService.getCart()
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "An error occurred"
              );
        }
    }
)

export const  postCart = createAsyncThunk(
    "post/products/cart/",
    async(userData,thunkAPI)
)


const createSlice = createSlice({
    name: "cart",
    initialState:{
        carts:[],
        cart:{},
        isLoading:false
    },
    reducers:{
        cartReset: () => initialState,
    }
})