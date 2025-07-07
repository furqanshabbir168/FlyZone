import React from "react";
import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <h1>Fly Zone</h1>
        <p>Fly Zone Admin DashBoard</p>
      </div>

      <div className="nav-bar-right">
        <button>Login</button>
      </div>
    </div>
  );
}

export default NavBar;
