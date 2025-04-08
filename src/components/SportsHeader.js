import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SportsHeader.css";
import sunIcon from "../pic/icons8-sun.svg";

const SportsHeader = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
    const [isSportsOpen, setIsSportsOpen] = useState(false);
    const [isEntertainmentOpen, setIsEntertainmentOpen] = useState(false);
    const [isPremiumOpen, setIsPremiumOpen] = useState(false);
    const [isNewsOpen, setIsNewsOpen] = useState(false);

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
                <div className="nav-wrapper">
                    <ul>
                        <li 
                            className="menu-item-sports" 
                            onClick={() => {
                                navigate("/");
                                window.location.reload();
                            }}
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
                        >
                            START
                        </li>
                        <li 
                            className="menu-item-sports" 
                            onClick={() => {
                                navigate("/sports");
                                window.location.reload();
                            }}
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && navigate("/sports")}
                        >
                            SPORTS
                        </li>
                        <li 
                            className="menu-item-sports" 
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Premium clicked")}
                        >
                            PREMIUM
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Discover clicked")}
                        >
                            DISCOVER
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Entertainment clicked")}
                        >
                            ENTERTAINMENT
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Tips clicked")}
                        >
                            TIPS
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Culture clicked")}
                        >
                            CULTURE
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Opinion clicked")}
                        >
                            OPINION
                        </li>
                        <li 
                            className="menu-item-sports"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && alert("Live TV clicked")}
                        >
                            LIVE TV
                        </li>
                        <li>
                            <button 
                                className="menu-button" 
                                onClick={() => setMenuOpen(!menuOpen)}
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        setMenuOpen(!menuOpen);
                                    }
                                }}
                            >
                                ☰
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {menuOpen && (
                <div className="dropdown-menu">
                    <div className="menu-content-sports">
                        {/* NEWS Section */}
                        <div className="menu-section">
                            <h3 
                                className="menu-title-sports"
                                onClick={() => setIsNewsOpen(!isNewsOpen)}
                                tabIndex="0" 
                                role="button"
                                aria-expanded={isNewsOpen} 
                            >
                                NEWS
                            </h3>
                            <ul className="menu-list">
                                <li>Aftonbladet Direct</li>
                                <li>Aftonbladet Climate</li>
                                <li>Columnists</li>
                                <li>Local</li>
                                {isNewsOpen && (
                                    <>
                                        <li>My Economy</li>
                                        <li>Swedish Heroes</li>
                                        <li>TV</li>
                                    </>
                                )}
                            </ul>
                            <button 
                                className="show-more-btn"
                                onClick={() => setIsNewsOpen(!isNewsOpen)}
                            >
                                {isNewsOpen ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* SPORTS Section */}
                        <div className="menu-section">
                            <h3 className="menu-title-sports">SPORTS</h3>
                            <ul className="menu-list">
                                <li>F1 Blog</li>
                                <li>Football</li>
                                <li>Football Trip</li>
                                <li>Hockey</li>
                                {isSportsOpen && (
                                    <>
                                        <li>Hockey Trip</li>
                                        <li>Martial Arts</li>
                                        <li>Live TV</li>
                                        <li>Manager Games</li>
                                        <li>Motorsport</li>
                                        <li>Live Scores</li>
                                        <li>NHL Blog</li>
                                        <li>Horse Racing</li>
                                    </>
                                )}
                            </ul>
                            <button 
                                className="show-more-btn"
                                onClick={() => setIsSportsOpen(!isSportsOpen)}
                            >
                                {isSportsOpen ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* ENTERTAINMENT Section */}
                        <div className="menu-section">
                            <h3 className="menu-title-sports">ENTERTAINMENT</h3>
                            <ul className="menu-list">
                                <li>Movies</li>
                                <li>Eurovision</li>
                                <li>Music</li>
                                <li>Rock Bear Awards</li>
                                {isEntertainmentOpen && (
                                    <>
                                        <li>Schlager Blog</li>
                                        <li>Gaming</li>
                                        <li>Where Are They Now</li>
                                        <li>TV & Series</li>
                                    </>
                                )}
                            </ul>
                            <button 
                                className="show-more-btn"
                                onClick={() => setIsEntertainmentOpen(!isEntertainmentOpen)}
                            >
                                {isEntertainmentOpen ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* PREMIUM Section */}
                        <div className="menu-section">
                            <h3 className="menu-title-sports">PREMIUM</h3>
                            <ul className="menu-list">
                                <li>Offers</li>
                                <li>Historical Archive</li>
                                <li>Magazines</li>
                                <li>Newsletters</li>
                                {isPremiumOpen && (
                                    <>
                                        <li>Premium Articles</li>
                                        <li>Podcasts</li>
                                        <li>Quizzes</li>
                                        <li>Travel Guides</li>
                                        <li>Tests & Reviews</li>
                                    </>
                                )}
                            </ul>
                            <button 
                                className="show-more-btn"
                                onClick={() => setIsPremiumOpen(!isPremiumOpen)}
                            >
                                {isPremiumOpen ? "Show less" : "Show more"}
                            </button>
                        </div>

                        {/* FEATURES Section */}
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
                                {isFeaturesOpen && (
                                    <>
                                        <li>Tech</li>
                                        <li>Science</li>
                                        <li>Sports</li>
                                        <li>Entertainment</li>
                                    </>
                                )}
                            </ul>
                            <button 
                                className="show-more-btn"
                                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                            >
                                {isFeaturesOpen ? "Show less" : "Show more"}
                            </button>
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