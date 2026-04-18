import React from "react";
import { CandyProvider } from "./context/CandyContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSideBar";
import "./App.css";

function App() {
  return (
    <CandyProvider>
      <div className="app-container">
        <Navbar />
        <div className="main-layout">
          <ProductList />
          <CartSidebar />
        </div>
      </div>
    </CandyProvider>
  );
}

export default App;
