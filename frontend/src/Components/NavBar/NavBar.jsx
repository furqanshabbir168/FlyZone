import React, { useState } from "react";
import "./NavBar.css";
import { Menu, Search } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentState, setCurrentState] = useState("home");
  const {user} = useUser();
  const {openSignIn} = useClerk();
  const naviagte = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Fly Zone</h1>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </div>

      {/* Desktop middle nav */}
      <div className="navbar-middle">
        <ul>
          <li><Link onClick={() => setCurrentState("home")} className={currentState === "home" ? "active" : ""} to="/">Home</Link></li>
          <li><Link onClick={() => setCurrentState("flights")} className={currentState === "flights" ? "active" : ""} to="flights">Flights</Link></li>
          <li><Link onClick={() => setCurrentState("about")} className={currentState === "about" ? "active" : ""}>About us</Link></li>
          <li><Link onClick={() => setCurrentState("booking")} className={currentState === "booking" ? "active" : ""} to="my-booking">Bookings</Link></li>
          <li><Link onClick={() => setCurrentState("admin")} className={currentState === "admin" ? "active" : ""}>Admin pannel</Link></li>
        </ul>
      </div>

      {/* Desktop right nav */}
      <div className="navbar-right">
        <Search />
        {!user?<button className="login" onClick={openSignIn}>Login</button>:<UserButton/>}
      </div>

      {/* Mobile dropdown (only visible when isOpen) */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => setCurrentState("home")} className={currentState === "home" ? "active" : "home"}>Home</li>
            <li onClick={() => setCurrentState("flights")} className={currentState === "flights" ? "active" : "flights"}>Flights</li>
            <li onClick={() => setCurrentState("about")} className={currentState === "about" ? "active" : "about"}>About us</li>
            <li onClick={() => setCurrentState("booking")} className={currentState === "booking" ? "active" : "booking"}>Bookings</li>
            <li onClick={() => setCurrentState("admin")} className={currentState === "admin" ? "active" : "admin"}>Admin Panel</li>
          </ul>
          <div className="mobile-login">
            <Search />
            {!user?<button className="login" onClick={openSignIn}>Login</button>:<UserButton/>}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
