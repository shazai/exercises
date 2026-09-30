import ProductCard from "./ProductCard.jsx";

function ProductList({ products }) {
  return (
    <section className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product._id || product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default ProductList;
