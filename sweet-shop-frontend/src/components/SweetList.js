import React, { useEffect, useState } from "react";
import API from "../api/api";

function SweetList() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    API.get("/api/sweets")
      .then((res) => {
        setSweets(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load sweets");
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Our Products</h2>

      {sweets.length === 0 && <p>No sweets available</p>}

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {sweets.map((sweet) => (
          <div
            key={sweet.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "200px",
            }}
          >
            <h4>{sweet.name}</h4>
            <p>₹{sweet.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SweetList;
