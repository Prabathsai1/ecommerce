import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>
        <div className="product-card-actions">
          <Link style={{border:"2px solid black",paddingTop:10,paddingLeft:5,paddingRight:5,fontSize:16,textDecoration:"none",color:"white",borderRadius:5,backgroundColor:"blue"}} to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            style={{paddingTop:10,paddingLeft:5,paddingRight:5,fontSize:16,textDecoration:"none",color:"white",borderRadius:5,backgroundColor:"blue"}}
            onClick={() => addToCart(product.id)}
          >
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
