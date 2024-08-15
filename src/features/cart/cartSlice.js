import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartService from "./cartService";
import { toast } from "react-toastify";


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
    async(userData,thunkAPI) => {
        try {
            const response = await cartService.postCart(userData)
            toast.success('Added to Cart')
            return response
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "An error occurred"
              );
        }
       
    }
)

export const putCart = createAsyncThunk(
    "put/products/cart/",
    async({id,userData},thunkAPI) => {
        try {
            const response = await cartService.putCart(id,userData)
            toast.success('updated Successfully')
            return response
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "An error occurred"
              );
        }
    }
)

export const deleteCart = createAsyncThunk(
    "delete/products/cart/",
    async(id,thunkAPI) => {
        try {
            const response = await cartService.deleteCart(id)
            toast.success('Deleted From Cart')
            return response
        } catch (error) {
            toast.error(error.response?.data?.message || "An error occurred");
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "An error occurred"
              );
        }
    }
)



const cartSlice = createSlice({
    name: "cart",
    initialState:{
        carts:[],
        cart:{},
        isLoading:false
    },
    reducers:{
        cartReset: () => initialState,
    },
    extraReducers:(builder) => {
       builder
       .addCase(getCart.pending,(state,action) => {
        state.isLoading = true;
       })
       .addCase(getCart.rejected,(state,action) => {
        state.isLoading = false
       })
       .addCase(getCart.fulfilled,(state,action) => {
        state.isLoading=false
        state.carts = action.payload
        console.log('get cart',action.payload)
       })
       .addCase(postCart.pending,(state,action) => {
        state.isLoading = true
       })
       .addCase(postCart.rejected,(state,action) => {
        state.isLoading = false
       })
       .addCase(postCart.fulfilled,(state,action) => {
        state.isLoading = false
        state.carts = action.payload
        console.log('add cart', action.payload)
       })
       .addCase(putCart.fulfilled,(state,action) => {
        state.isLoading = false
        state.carts = action.payload
        console.log('updated cart', action.payload)
       })
       .addCase(deleteCart.fulfilled,(state,action) => {
        state.isLoading = false
        state.carts = action.payload
        console.log('deleted Carts', action.payload)
       })
    }
})

export const {cartReset} = cartSlice.actions
export default cartSlice.reducer