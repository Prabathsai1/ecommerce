import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();

  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();

  function placeOrder() {
    // If user is not logged in
    if (!user) {
      alert("Please login to place an order");
      navigate("/auth");
      return;
    }

    // If cart is empty
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // Successful order
    alert("Successful Order!");
    clearCart();
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>

        <div className="checkout-container">
          {/* LEFT SIDE - ITEMS */}
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>

            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="checkout-item-image"
                  />

                  <div className="checkout-item-details">
                    <h3 className="checkout-item-name">
                      {item.product.name}
                    </h3>
                    <p className="checkout-item-price">
                      ${item.product.price} each
                    </p>
                  </div>

                  <div className="checkout-item-controls">
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>

                      <span className="quantity-value">
                        {item.quantity}
                      </span>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="checkout-item-total">
                      $
                      {(item.product.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className="btn btn-secondary btn-small"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>

            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>
              <p className="checkout-total-value">
                ${total.toFixed(2)}
              </p>
            </div>

            <div className="checkout-total">
              <p className="checkout-total-label">Total:</p>
              <p className="checkout-total-value checkout-total-final">
                ${total.toFixed(2)}
              </p>
            </div>

            <button
              className="btn btn-primary btn-large btn-block"
              onClick={placeOrder}
            >
              {user ? "Place Order" : "Login to Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}