import {useEffect} from 'react' ;
import {useDispatch, useSelector} from 'react-redux' ;
import { setProducts } from '../reducer/Product.reducer';
import { addToCart, removeFromCart } from '../reducer/Cart.reducer';

const ProductPage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.list)
    const cart = useSelector(state => state.cart.items) 

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch(setProducts(data)))
    },[dispatch])

    const isMovieAdded = (productId) => {
        return cart.hasOwnProperty(productId) ; 
    }

    const handlebutton = (e) => {
        const productId = e.target.dataset.id ;
        if (isMovieAdded(productId)){  
            dispatch(removeFromCart(productId)) 
        }
        else {
            dispatch(addToCart(productId)) ;
        }
    }

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                products.map((product)=>(
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex justify-center p-4">
                            <img 
                                src={product.image} 
                                alt="Product 1" 
                                className="w-full h-48 object-cover" 
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-2 text-ellipsis overflow-hidden h-20">{product.description}</p>
                            <p className="text-lg font-semibold text-green-500 ">$ {product.price}</p>
                            <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" data-id={product.id} onClick={handlebutton}>{isMovieAdded(product.id) ? "Remove From Cart" : "Add To Cart"}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductPage;
