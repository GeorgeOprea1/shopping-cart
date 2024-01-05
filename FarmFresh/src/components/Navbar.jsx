import "../styles/Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <div className="link-container">
      <a href="#home" target="_blank" rel="noopener noreferrer">
        Home
      </a>
      <a href="#about" target="_blank" rel="noopener noreferrer">
        About
      </a>
      <a href="#products" target="_blank" rel="noopener noreferrer">
        Products
      </a>
      <div className="cart-container">
        <a href="#cart" target="_blank" rel="noopener noreferrer">
          Cart
        </a>
        <HiOutlineShoppingBag className="cart-icon" />
      </div>
    </div>
  );
};

export default Navbar;
