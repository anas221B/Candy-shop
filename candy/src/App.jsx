import React, { useState } from "react";
import "./App.css";

const CANDY_DATA = [
  {
    id: 1,
    name: "Gummy Bears",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?w=200",
  },
  {
    id: 2,
    name: "Rainbow Lollipops",
    price: 2.5,
    image: "https://images.unsplash.com/photo-1534073133331-c4b62a557083?w=200",
  },
  {
    id: 3,
    name: "Sour Belts",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=200",
  },
  {
    id: 4,
    name: "Chocolate Truffles",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=200",
  },
];

function App() {
  // Initialize as empty array to avoid "not iterable" errors
  const [cart, setCart] = useState([]);

  // Updated logic using prevCart for safety
  const addToCart = (candy) => {
    setCart((prevCart) => [...prevCart, { ...candy, cartId: Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartId !== cartId));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1>🍭 Sugar Rush</h1>
        <div className="cart-icon">🛒 {cart.length} Items</div>
      </nav>

      <div className="main-layout">
        <section className="product-section">
          <h2>Our Fresh Candies</h2>
          <div className="grid">
            {CANDY_DATA.map((candy) => (
              <div key={candy.id} className="card">
                <img src={candy.image} alt={candy.name} />
                <h3>{candy.name}</h3>
                <p className="price">${candy.price.toFixed(2)}</p>
                <button onClick={() => addToCart(candy)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <aside className="cart-sidebar">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty!</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.cartId}>
                    <span>
                      {item.name} - ${item.price.toFixed(2)}
                    </span>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.cartId)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
              <div className="total">
                <h3>Total: ${total}</h3>
                <button className="checkout-btn">Checkout</button>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
