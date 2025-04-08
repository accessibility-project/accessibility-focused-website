import React from "react";
import "../styles/Support.css";
import { useNavigate } from "react-router-dom"; 

const FormPage = () => {
    const navigate = useNavigate();

    const navigateToSuccess = () => {
        navigate("/successpage");
    };

    return (
        <div>
            <header className="contact-header">
                <h1 className="contact-title">What can we help you with? </h1>
                <div className="search-container">
                    <input type="text" className="search-box" placeholder="Enter your search term or question here!" />
                </div>
            </header>

            <div className="support-side">
                <h3 className="support-h"> Contact Us </h3>

                <div className="support-column">
                    <h3 className="support-text"> Customer Service </h3>
                    <p> Welcome to chat with our support <span className="red-text">here</span>! </p>
                    <p> You can also call us on weekdays from 9 AM to 12 PM at: 
                        <span 
                            className="red-text" 
                            style={{cursor: "pointer", textDecoration: "underline"}} 
                            onClick={navigateToSuccess}
                        >
                            08-725 25 25
                        </span>
                    </p>
                </div>

                <div className="support-column">
                    <h3 className="support-text"> For Resellers </h3>
                    <p> If you are or want to become a reseller, visit <span className="red-text"> www.becomereseller.se.</span> </p>
                    <p> Please send any inquiries via the contact form on the website. </p>
                </div>

                <div className="adress-column">
                    <p> Evening News Customer Center</p>
                    <p> Box 1234</p>
                    <p>550 10 Springfield</p>
                    <p>Phone: 077-55 12 345</p>
                    <p>Fax: 036-12 34 56</p>
                    <p>Email: support@eveningnews.com</p>
                </div>
            </div>
        </div>
    );
};

export default FormPage;