import React from "react";
import "../styles/Contact.css";
import { FaInfoCircle, FaBoxOpen, FaUser, FaShieldAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <header className="contact-header">
                <h1 className="contact-title">What can we help you with? </h1>
                <div className="search-container">
                    <input type="text" className="search-box" placeholder="Enter your search term or question here!" />
                </div>
            </header>

            <div className="contact-container">
                {/* Paket 1 */}
                <div className="contact-wrapper">
                    <div className="contact-card">
                        <FaInfoCircle className="contact-icon" />
                        <h3 className="contact-package">About us</h3>
                    </div>
                </div>

                {/* Paket 2 */}
                <div className="contact-wrapper">
                    <div className="contact-card">
                        <FaBoxOpen className="contact-icon" />
                        <h3 className="contact-package">Plus Package</h3>
                    </div>
                </div>

                {/* Paket 3 */}
                <div className="contact-wrapper">
                    <div className="contact-card">
                        <FaUser className="contact-icon" />
                        <h3 className="contact-package">About your account </h3>
                    </div>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-card">
                        <FaShieldAlt className="contact-icon" />
                        <h3 className="contact-package">About GDPR</h3>
                    </div>
                </div>
            </div>



            <div className="contact-container">
                {/* Paket 1 */}
                <div className="contact-wrapper">
                    <div className="contact-card-one">
                        <h3 className="contact-package-one">Have you visited My Page? </h3>
                        <p className="contact-info-one">Feel free to visit our self-service to easily manage everything related to your subscription.</p>
                    </div>
                </div>
            </div>



            <div className="contact-container">
                {/* Paket 1 */}
                <div className="contact-wrapper">
                    <div className="contact-card-two">
                        <h3 className="contact-package">Chat with us </h3>
                        <p className="contact-info">An easy and quick way to get help.</p>
                    </div>
                </div>

                {/* Paket 2 */}
                <div className="contact-wrapper">
                    <div 
                        className="contact-card-two" 
                        onClick={() => navigate("/form")}
                        style={{ cursor: "pointer" }} 
                    >
                        <h3 className="contact-package">Contact us</h3>
                        <p className="contact-info">Call or send us an email.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;