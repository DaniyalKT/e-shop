import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import ProductSection from "./Component/ProductSection/ProductSection";
import products from "./data/products";
import { useState } from "react";
import Toast from "./Component/Toast/Toast";
import Cart from "./Component/Cart/Cart";
import productsContext from "./Context/ProductContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)
  return (
    <div>
      <productsContext.Provider
        value={{
          allProducts,
          userCart,
          setUserCart,
          setIsShowToast,
          isShowToast,
          setIsShowCart,
          isShowCart
        }}
      >
        <Navbar />

        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">All Products</h1>
              <ProductSection  />
          </div>
        </main>
        <Toast />
        <Cart />
      </productsContext.Provider>
    </div>
  );
}

export default App;
