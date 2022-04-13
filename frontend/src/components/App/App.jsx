import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../../screens/About";
import CartScreen from "../../screens/CartScreen";
import CategoryScreen from "../../screens/CategoryScreen";
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
        <Route path="/category" element={<CategoryScreen />}  />
        <Route path="/about" element={<About />}  />
          
      </Routes>
      </nav>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
