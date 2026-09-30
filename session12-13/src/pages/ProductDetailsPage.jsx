import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../api/productsApi.js";
import LoadingMessage from "../components/LoadingMessage.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function ProductDetailsPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getProductById(id);
        setProduct(data.data || data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (isLoading) return <LoadingMessage />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <p className="container">Product not found.</p>;

  return (
    <main className="container">
      <Link to="/products">← Back to products</Link>

      <article className="details-card">
        <h1>{product.name}</h1>
        <p>Category: {product.category}</p>
        <p>Price: ₱{Number(product.price).toLocaleString()}</p>
        <p>Stock: {product.stock}</p>
      </article>
    </main>
  );
}

export default ProductDetailsPage;
