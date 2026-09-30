import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>MSTCONNECT Store</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/new">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
