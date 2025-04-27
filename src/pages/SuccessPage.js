import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClickCounterContext } from "../context/ClickCounterContext";
import "../styles/Support.css";

const SuccessPage = () => {
    const navigate = useNavigate();
    const { clickCount } = useContext(ClickCounterContext);

    const handleBackToHome = () => {
        navigate("/");
        window.location.reload();
    };

    return (
        <div>
            <header className="contact-header">
                <h1 className="contact-title">Success</h1>
            </header>

            <div className="support-side">

                <h3 style={{ textAlign: "center" }}>
                    Antal klick: {clickCount}
                </h3>

                <h3 
                    className="support-h"
                    onClick={handleBackToHome}
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                    Back to homepage
                </h3>

            </div>
        </div>
    );
};


export default SuccessPage;