function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="search"
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search products"
      aria-label="Search products"
    />
  );
}

export default SearchBar;
