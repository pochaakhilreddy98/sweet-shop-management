import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Life Is Short, <br />
            So Make It Sweet Here!
          </h1>

          <p>
            At work, rest and play, you get three great tastes in a Milky Way.
          </p>

          <button className="primary-btn">Explore now →</button>
        </div>

        <div className="hero-right">
          <img src="/hero.png" alt="Sweet Plate" />
        </div>
      </section>

      {/* TOP SELLING PRODUCTS */}
      <section className="top-products">
        <h2>Top Selling Products</h2>

        <div className="product-grid">
          <div className="product-card">
            <img src="/rasmalai.jpg" alt="Ras Malai" />
            <h4>Ras Malai</h4>
            <p>Rs.145.00</p>
          </div>

          <div className="product-card">
            <img src="/gulabjamun.jpg" alt="Gulab Jamun" />
            <h4>Gulab Jamun</h4>
            <p>Rs.150.00</p>
          </div>

          <div className="product-card">
            <img src="/peda.jpg" alt="Malai Peda" />
            <h4>Malai Peda</h4>
            <p>Rs.170.00</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
