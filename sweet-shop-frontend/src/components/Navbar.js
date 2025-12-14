import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.jpg" alt="Sweet Cart" />
        <span>Sweet Cart</span>
      </div>

      {/* Menu */}
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
         {/* Show Login & Register ONLY if NOT logged in */}
        {!isLoggedIn && (
          <>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/register">REGISTER</Link></li>
            <li><Link to="/about">ABOUT US</Link></li>
          </>
        )}
        <li><Link to="/products">PRODUCTS</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
        <li className="cart-icon">
  <Link to="/cart">🛒</Link>
</li>


      
        {/* Show Logout ONLY if logged in */}
        {isLoggedIn && (
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              LOGOUT
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
