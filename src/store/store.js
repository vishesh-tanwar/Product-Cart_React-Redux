import { configureStore } from '@reduxjs/toolkit'
import productListReducer from '../reducer/Product.reducer'
import cartReducer from '../reducer/Cart.reducer'

export default configureStore({
  reducer: {
    products : productListReducer,
    cart : cartReducer, 
  },
})