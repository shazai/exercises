import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/productsApi.js";
import ProductForm from "../components/ProductForm.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";

function CreateProductPage() {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  async function handleCreateProduct(productData) {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      await createProduct(productData);
      navigate("/products");
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="container">
      <h1>Add Product</h1>

      {submitError && <ErrorMessage message={submitError} />}

      <ProductForm
        onSubmit={handleCreateProduct}
        isSubmitting={isSubmitting}
      />
    </main>
  );
}

export default CreateProductPage;
