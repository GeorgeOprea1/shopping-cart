import "../styles/ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img className="product-img" src={product.image} alt={product.title} />
      <div className="product-details">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate}</p>
      </div>
      <div className="button-container">
        <button id="buy">Buy</button>
        <button id="add">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
