import { useState } from "react";

function validateProduct(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "Product name is required.";
  }

  if (!formData.price || Number(formData.price) <= 0) {
    errors.price = "Price must be greater than zero.";
  }

  if (!formData.category) {
    errors.category = "Category is required.";
  }

  if (
    formData.stock === "" ||
    Number.isNaN(Number(formData.stock)) ||
    Number(formData.stock) < 0
  ) {
    errors.stock = "Stock must be zero or greater.";
  }

  return errors;
}

function ProductForm({ onSubmit, isSubmitting = false }) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateProduct(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    await onSubmit({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <label>
        Product Name
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Example: Mechanical Keyboard"
        />
      </label>
      {errors.name && <p className="field-error">{errors.name}</p>}

      <label>
        Price
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Example: 2500"
        />
      </label>
      {errors.price && <p className="field-error">{errors.price}</p>}

      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>
        </select>
      </label>
      {errors.category && (
        <p className="field-error">{errors.category}</p>
      )}

      <label>
        Stock
        <input
          name="stock"
          type="number"
          min="0"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Example: 10"
        />
      </label>
      {errors.stock && <p className="field-error">{errors.stock}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save Product"}
      </button>
    </form>
  );
}

export default ProductForm;
