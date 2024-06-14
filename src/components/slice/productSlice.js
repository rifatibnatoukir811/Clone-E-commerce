import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    },
    reducers: {
        addToCart: (state, action) => {
            let findproduct = state.cartItem.findIndex((item) => item.id == action.payload);
            if (findproduct !== -1) {
                state.cartItem[findproduct].qun += 1
                localStorage.setItem("cart", JSON.stringify(state.cartItem))

            } else {
                state.cartItem = [...state.cartItem, action.payload]
                localStorage.setItem("cart", JSON.stringify(state.cartItem))
            }
        },
        productIncrement: (state, action) => {
            state.cartItem[action.payload].qun += 1
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        },
        productDecrement: (state, action) => {
            if (state.cartItem[action.payload].qun > 1) {
                state.cartItem[action.payload].qun -= 1
                localStorage.setItem("cart", JSON.stringify(state.cartItem))
            }
        },
        removeProduct:(state, action)=>{
            state.cartItem.splice(action.payload, 1)
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
        }
    },
})

export const { addToCart, productIncrement, productDecrement, removeProduct } = productSlice.actions

export default productSlice.reducer;