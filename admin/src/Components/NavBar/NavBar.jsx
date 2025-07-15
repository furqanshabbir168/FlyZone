import React from "react";
import './NavBar.css';
import toast from "react-hot-toast";

function NavBar() {
  function handleLogin(){
    toast.error("You can't login to this site!");
  }
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <h1>Fly Zone</h1>
        <p>Fly Zone Admin DashBoard</p>
      </div>
      <a href="https://flyzone.vercel.app" className="link"><p>View our main site</p></a>
      <div className="nav-bar-right">
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default NavBar;
