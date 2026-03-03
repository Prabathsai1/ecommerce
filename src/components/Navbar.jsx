import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        <div className="navbar-links">
          <Link to="/"style={{padding:5,fontSize:16,textDecoration:"none",color:"black"}}>
            Home
          </Link>
          <Link to="/checkout" style={{padding:5,fontSize:16,textDecoration:"none",color:"black"}}>
            Cart
          </Link>
        </div>
        <div className="navbar-auth">
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" style={{padding:5,fontSize:15,textDecoration:"none",color:"black"}}>
                Login
              </Link>
              <Link to="/auth" style={{padding:5,fontSize:15,textDecoration:"none",color:"black"}}>
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button style={{padding:5,fontSize:12}} onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
