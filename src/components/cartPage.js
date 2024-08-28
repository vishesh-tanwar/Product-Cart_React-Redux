import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, decreaseQuantity, increaseQuantity, removeFromCart } from "../reducer/Cart.reducer";

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items) ;
    const productList = useSelector(state => state.products.list);
    const dispatch = useDispatch();

    const getProduct = (productId) => {
        return productList.find(product => product.id == productId) 
    }

    const handleRemove = (productId) => (e) => {
        dispatch(removeFromCart(productId));
    }

    const handleIncrease = (productId) => (e) => {
        dispatch(increaseQuantity(productId)) 
    }

    const handleDecrease = (productId) => (e) => {
        dispatch(decreaseQuantity(productId)) 
    }

    const handleChange = (productId) => (e) => {
        const value = parseInt(e.target.value,10)
        dispatch(changeQuantity({productId , value }));
    }

    const totalAmount = Object.keys(cartItems).reduce((total,productId)=>{
        const product = getProduct(productId);
        return total + (product ? product.price * cartItems[productId] : 0 )
    },0) 
    
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6">
                {
                    Object.keys(cartItems).map(productId => (
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="flex-shrink-0">
                                <img 
                                    src={getProduct(productId).image}  
                                    alt="Product 1" 
                                    className="w-24 h-24 object-cover rounded-lg"
                                /> 
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{getProduct(productId).title}</h3>
                                <p className="text-gray-600 mb-2">${getProduct(productId).price} </p>
                                <div className="flex items-center space-x-2">
                                    <p className="text-gray-600 mb-2">Quantity : {cartItems[productId]}</p>
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={handleIncrease(productId)}>+</button>
                                    <input 
                                        type="number" 
                                        className="w-20 text-center border border-gray-300 rounded"
                                        value={cartItems[productId]} 
                                        onChange={handleChange(productId)}
                                    />
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={handleDecrease(productId)}>-</button>
                                </div>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={handleRemove(productId)}>Remove</button>
                            </div>
                        </div>

                    ))
                }
                <p className="text-lg font-bold mt-4">Total Amount: ${totalAmount.toFixed(2)}</p> 
            </div>
        </div>
    );
};

export default CartPage;
