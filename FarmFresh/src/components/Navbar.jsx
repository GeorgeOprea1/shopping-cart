import "../styles/Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="link-container">
      <a
        href="#home"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to home page"
      >
        Home
      </a>
      <a
        href="#about"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link to about page"
      >
        About
      </a>
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
