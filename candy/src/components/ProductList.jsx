import { useCandy } from "../context/CandyContext";

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

const ProductList = () => {
  const { addToCart } = useCandy();
  return (
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
  );
};
export default ProductList;
