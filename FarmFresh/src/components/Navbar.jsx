import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="../src/assets/logo.svg" alt="logo image" />
      </div>
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
    </div>
  );
};

export default Navbar;
