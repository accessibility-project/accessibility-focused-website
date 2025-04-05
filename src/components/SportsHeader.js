import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import "../styles/Sports.css";
import sunIcon from "../pic/icons8-sun.svg";

const SportsHeader = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <header className="sports-header">
                <div className="header-left">
                    <p className="date">THURSDAY 20 MARCH 2025</p>
                    <p className="subtitle">Daily names: Josef, Josefina</p>
                </div>
                <div className="header-right">
                    <p className="weather">Weather</p>
                    <p className="weather-location">SYDNEY</p>
                </div>
                <div className="header-icon">
                    <img src={sunIcon} alt="Solsken" className="weather-icon" />
                </div>
                <div className="header-temp">
                    <p className="temperature">28°</p>
                </div>
                <div className="header-buttons-sports">
                    <button 
                        className="buy-btn-sports" 
                        onClick={() => {
                            navigate("/premium");
                            window.location.reload();
                        }}
                    >
            Buy +
                    </button>
                    <button className="login-btn-sports">Login</button>
                </div>
            </header>


            <nav className="sports-nav">
                <ul>
                    <li onClick={() => {
                        navigate("/")
                        window.location.reload();
                    }}>START</li>
                    <li onClick={() => {
                        navigate("/sports")
                        window.location.reload();
                    }}>SPORTS</li>
                    <li>PREMIUM</li>
                    <li>DISCOVER</li>
                    <li>ENTERTAINMENT</li>
                    <li>TIPS</li>
                    <li>CULTURE</li>
                    <li>OPINION</li>
                    <li>LIVE TV</li>
                    <li onClick={() => setMenuOpen(!menuOpen)} className="menu-button">
            ☰
                    </li>
                </ul>
            </nav>

            {menuOpen && (
                <div className="dropdown-menu">
                    <div className="menu-content-sports">
                        <div className="menu-section">
                            <h3 className="menu-title-sports">NEWS</h3>
                            <ul className="menu-list">
                                <li>Aftonbladet Direct</li>
                                <li>Aftonbladet Climate</li>
                                <li>Columnists</li>
                                <li>Local</li>
                                <li>My Economy</li>
                                <li>Swedish Heroes</li>
                                <li>TV</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">SPORTS</h3>
                            <ul className="menu-list">
                                <li>F1 Blog</li>
                                <li>Football</li>
                                <li>Football Trip</li>
                                <li>Hockey</li>
                                <li>Hockey Trip</li>
                                <li>Martial Arts</li>
                                <li>Live TV</li>
                                <li>Manager Games</li>
                                <li>Motorsport</li>
                                <li>Live Scores</li>
                                <li>NHL Blog</li>
                                <li>Horse Racing</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">ENTERTAINMENT</h3>
                            <ul className="menu-list">
                                <li>Movies</li>
                                <li>Eurovision</li>
                                <li>Music</li>
                                <li>Rock Bear Awards</li>
                                <li>Schlager Blog</li>
                                <li>Gaming</li>
                                <li>Where Are They Now</li>
                                <li>TV & Series</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">PREMIUM</h3>
                            <ul className="menu-list">
                                <li>Offers</li>
                                <li>Historical Archive</li>
                                <li>Magazines</li>
                                <li>Newsletters</li>
                                <li>Premium Articles</li>
                                <li>Podcasts</li>
                                <li>Quizzes</li>
                                <li>Travel Guides</li>
                                <li>Tests & Reviews</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">FEATURES</h3>
                            <ul className="menu-list">
                                <li>Cars</li>
                                <li>Family</li>
                                <li>Food & Cooking</li>
                                <li>Home</li>
                                <li>Horoscope</li>
                                <li>Weather</li>
                                <li>Royal News</li>
                                <li>Fashion</li>
                                <li>Travel</li>
                                <li>Beauty</li>
                                <li>TV Guide</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">CULTURE & OPINION</h3>
                            <ul className="menu-list">
                                <li>Debate</li>
                                <li>Culture</li>
                                <li>Editorial</li>
                            </ul>
                        </div>

                        <div className="menu-section">
                            <h3 className="menu-title-sports">A-Z</h3>
                        </div>

                        <div className="menu-section-login-sports">
                            <h3 className="menu-title-login-sports">LOGIN</h3>
                            <ul className="menu-list">
                                <li>Light Mode</li>
                                <li>Cookie Settings</li>
                                <li>Submit a Tip</li>
                                <li>About</li>
                                <li onClick={() => {
                                    navigate("/contact")
                                    window.location.reload();
                                }}>Contact Us</li>
                                <li>Customer Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SportsHeader;