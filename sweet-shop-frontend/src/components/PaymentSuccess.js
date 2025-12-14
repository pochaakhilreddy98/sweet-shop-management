import React from "react";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h2>🎉 Payment Successful!</h2>
      <p>Your order has been placed successfully.</p>

      <Link to="/products">
        <button style={{ marginTop: "20px" }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default PaymentSuccess;
