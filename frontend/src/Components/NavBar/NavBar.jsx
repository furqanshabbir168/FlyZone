import React, { useState } from "react";
import "./NavBar.css";
import { Menu, Search } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/logo-removebg-preview.png'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentState, setCurrentState] = useState("home");
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <h1>Fly Zone</h1>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={28} />
      </div>

      {/* Desktop middle nav */}
      <div className="navbar-middle">
        <ul>
          <li><Link onClick={() => setCurrentState("home")} className={currentState === "home" ? "active" : ""} to="/">Home</Link></li>
          <li><Link onClick={() => setCurrentState("flights")} className={currentState === "flights" ? "active" : ""} to="/flights">Flights</Link></li>
          <li><Link onClick={() => setCurrentState("about")} className={currentState === "about" ? "active" : ""} to="/about">About us</Link></li>
          <li><Link onClick={() => setCurrentState("booking")} className={currentState === "booking" ? "active" : ""} to="/my-booking">Bookings</Link></li>
          <li><Link onClick={() => setCurrentState("admin")} className={currentState === "admin" ? "active" : ""} to="https://fly-zone-admin.vercel.app">Admin Panel</Link></li>
        </ul>
      </div>

      {/* Desktop right nav */}
      <div className="navbar-right">
        <Search onClick={()=>{navigate('/flights')}}/>
        {!user ? (
          <button className="login" onClick={openSignIn}>Login</button>
        ) : (
          <UserButton />
        )}
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link
                to="/"
                className={currentState === "home" ? "active" : ""}
                onClick={() => { setCurrentState("home"); setIsOpen(false); }}
              >Home</Link>
            </li>
            <li>
              <Link
                to="/flights"
                className={currentState === "flights" ? "active" : ""}
                onClick={() => { setCurrentState("flights"); setIsOpen(false); }}
              >Flights</Link>
            </li>
            <li>
              <Link
                to="/about"
                className={currentState === "about" ? "active" : ""}
                onClick={() => { setCurrentState("about"); setIsOpen(false); }}
              >About us</Link>
            </li>
            <li>
              <Link
                to="/my-booking"
                className={currentState === "booking" ? "active" : ""}
                onClick={() => { setCurrentState("booking"); setIsOpen(false); }}
              >Bookings</Link>
            </li>
            <li>
              <Link
                to="/admin"
                className={currentState === "admin" ? "active" : ""}
                onClick={() => { setCurrentState("admin"); setIsOpen(false); }}
              >Admin Panel</Link>
            </li>
          </ul>
          <div className="mobile-login">
            <Search onClick={()=>{navigate('/flights')}}/>
            {!user ? (
              <button className="login" onClick={openSignIn}>Login</button>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
