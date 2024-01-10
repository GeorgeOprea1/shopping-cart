import "../styles/Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="link-container">
      <Link to="/home" rel="noopener noreferrer" aria-label="Link to home page">
        Home
      </Link>
      <Link
        to="/about"
        rel="noopener noreferrer"
        aria-label="Link
        to about page"
      >
        About
      </Link>
      <a
        href="#products"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to products page"
      >
        Products
      </a>
      <div className="cart-container">
        <a
          href="#cart"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to cart page"
        >
          Cart
        </a>
        <HiOutlineShoppingBag className="cart-icon" />
      </div>
    </div>
  );
};

export default Navbar;
