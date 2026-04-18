import { useCandy } from "../context/CandyContext";

const Navbar = () => {
  const { cart } = useCandy();
  return (
    <nav className="navbar">
      <h1>🍭 Sugar Rush</h1>
      <div className="cart-icon">🛒 {cart.length} Items</div>
    </nav>
  );
};
export default Navbar;
