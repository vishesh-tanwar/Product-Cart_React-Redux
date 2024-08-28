import './App.css';
import {BrowserRouter , Route ,Routes} from "react-router-dom";
import ProductPage from "./components/ProductPage" ;
import CartPage from "./components/cartPage"
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/> 
        <Routes>
                
          <Route>
          <Route path="/" element={<ProductPage />} />
          <Route path="/Cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
