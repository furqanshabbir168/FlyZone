import React from "react";
import './Footer.css';
import { Copyright, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <div className="footer-columns">
                <div className="left">
                    <h1>Fly Zone</h1>
                    <p>
                        FlyZone is your trusted travel companion for seamless and affordable flight bookings.
                        From last-minute getaways to planned adventures, we bring the best deals right to you.
                        Book with confidence, explore new destinations, and fly smarter every time.
                        Your journey begins here — only at FlyZone.
                    </p>
                </div>

                <div className="middle">
                    <h1>Company</h1>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/#about')}>About Us</li>
                        <li onClick={() => navigate('/#contact')}>Contact Us</li>
                        <li onClick={() => navigate('/#privacy')}>Privacy Policy</li>
                    </ul>
                </div>

                <div className="right">
                    <h1>Get in touch</h1>
                    <ul>
                        <li>+1-234-567-890</li>
                        <li>support@flyzone.com</li>
                    </ul>
                </div>
            </div>

            <div className="social">
                <Facebook />
                <Instagram />
                <Twitter />
                <Linkedin />
                <Youtube />
            </div>

            <hr />

            <div className="copy-right">
                <Copyright />
                <p>{new Date().getFullYear()} by FlyZone. Developed and Secured by Furqan</p>
            </div>
        </div>
    );
}

export default Footer;
