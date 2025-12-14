import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const navigate = useNavigate();

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> – ₹{item.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <div style={{ marginTop: 12 }}>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
