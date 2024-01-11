import "../styles/ProductsComponent.css";
import Navbar from "./Navbar";
import LogoComponent from "./LogoComponent";
import ProductItem from "./ProductItem";

import { useEffect, useState } from "react";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        setProducts(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <div className="products-header">
        <LogoComponent />
        <Navbar />
      </div>
      <div className="products">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsComponent;
