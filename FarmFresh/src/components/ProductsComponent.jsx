import "../styles/ProductsComponent.css";
import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";

const ProductsComponent = () => {
  return (
    <div className="products-container">
      <div className="products-header">
        <LogoComponent />
        <Navbar />
      </div>
      <div className="products"></div>
    </div>
  );
};

export default ProductsComponent;
