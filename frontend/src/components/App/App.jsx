import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "../../screens/CartScreen";
import ProductScreen from "../../screens/ProductScreen";
import Footer from "../Footer";
import Main from "../Main";
import Navbars from "../Navbars";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbars />
      <nav>
        
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/products/:productId" element={<ProductScreen />}  />
        <Route path="/cart" element={<CartScreen />} exact />
        <Route path="/cart/:productId" element={<CartScreen />}  />
          
      </Routes>
      </nav>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
