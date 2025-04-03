import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PremiumPage from "./pages/PremiumPage";
import SportsPage from "./pages/SportsPage";
import ContactPage from "./pages/ContactPage";
import FormPage from "./pages/FormPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/premium" element={<PremiumPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/sports" element={<SportsPage />} />
                <Route path="/form" element={<FormPage />} />
            </Routes>
        </Router>
    );
};

export default App;
