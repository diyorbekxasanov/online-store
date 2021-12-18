import Body from "./Component/Body";
import Navbar from "./Component/Navbar";
import {Routes, Route} from "react-router-dom"
import Product from "./Component/Product";
import ProductsInfo from "./Component/ProductsInfo";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Register from "./Component/Register";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Body/>} />
        <Route exact path="/products" element={<Product/>} />
        <Route exact path="/products/:id" element={<ProductsInfo/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
