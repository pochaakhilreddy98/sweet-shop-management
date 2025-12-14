import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment success
    localStorage.removeItem("cart"); // clear cart
    navigate("/payment-success");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
      <h2>Payment</h2>

      <div style={{ marginBottom: "20px" }}>
        <p><strong>Payment Method</strong></p>
        <label>
          <input type="radio" checked readOnly /> UPI / Card / Net Banking
        </label>
      </div>

      <button onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
