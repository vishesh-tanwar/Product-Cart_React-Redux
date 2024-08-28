import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart', 
  initialState: {
    items: {},  
  },
  reducers: {
      addToCart : (state,action) => {
        state.items[action.payload] = 1 ;
      },
      removeFromCart : (state,action) => {
        delete state.items[action.payload] ; 
      },
      increaseQuantity : (state,action) => {
        state.items[action.payload] += 1 
      },
      decreaseQuantity : (state,action) => {
        if(state.items[action.payload] > 1){
            state.items[action.payload] -= 1 
        }

      },
      changeQuantity: (state, action) => {
        const { productId, value } = action.payload;
        if (value > 0) {
          state.items[productId] = Number(value);
        } 
      },
  },
})

export const { addToCart , removeFromCart , increaseQuantity , decreaseQuantity , changeQuantity } = cartSlice.actions

export default cartSlice.reducer