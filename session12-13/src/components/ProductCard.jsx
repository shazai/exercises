import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const productId = product._id || product.id;

  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ₱{Number(product.price).toLocaleString()}</p>
      <p>Stock: {product.stock}</p>

      <Link to={`/products/${productId}`}>View details</Link>
    </article>
  );
}

export default ProductCard;
