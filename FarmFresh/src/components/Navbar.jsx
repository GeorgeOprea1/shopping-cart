import "../styles/Navbar.css";

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
      <a href="#cart" target="_blank" rel="noopener noreferrer">
        Cart
      </a>
    </div>
  );
};

export default Navbar;
