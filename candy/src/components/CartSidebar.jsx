import { useCandy } from "../context/CandyContext";

const CartSidebar = () => {
  const { cart, removeFromCart, total } = useCandy();
  return (
    <aside className="cart-sidebar">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Empty!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.cartId}>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item.cartId)}>❌</button>
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
  );
};
export default CartSidebar;
