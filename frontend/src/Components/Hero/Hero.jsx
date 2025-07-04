import React from "react";
import hero from '../../assets/hero.jpg';
import {ArrowRight} from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Your Sky</h1>
        <h1>Your Schedule</h1>
        <p>Book your next adventure in minutes – fast, secure, and affordable flights worldwide.</p>
        <p className="info-strip">
          ✈️ Action | 🌍 Adventure | 🧭 Exploration | 📅 {new Date().getFullYear()} | 🕒 2h Avg
        </p>
        <div className="explore">
          <a href="#moment"><button>Explore More</button></a>
          <ArrowRight/>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
