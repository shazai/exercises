function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <select
      value={selectedCategory}
      onChange={(event) => onCategoryChange(event.target.value)}
      aria-label="Filter by category"
    >
      <option value="All">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Accessories">Accessories</option>
      <option value="Books">Books</option>
    </select>
  );
}

export default CategoryFilter;
