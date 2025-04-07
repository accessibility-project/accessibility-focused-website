import React from "react";
import "../styles/Premium.css";
import { useNavigate } from "react-router-dom"; 

const PremiumPage = () => {
    const navigate = useNavigate();

    const navigateToSuccess = () => {
        navigate("/successpage");
    };

    return (
        <div>
            <header className="premium-header">
                <h1 className="premium-title">Upgrade your subscription and get full access.</h1>
                <h2 className="premium-text">
          You'll unlock all articles, live sports, exclusive offers, and much more. 
          With the Super Package, you get access to even more news and services.
                </h2>
            </header>

            <div className="premium-side">
                <div className="login-div">
                    <p className="login-info-premium">Already a Premium Member? Login Here</p>
                </div>

                <div className="premium-container">
                    {/* Paket 1 */}
                    <div className="premium-wrapper">
                        <div className="premium-card">
                            <h3 className="premium-package">Aftonbladet Plus</h3>
                            <p className="premium-info">All content on Aftonbladet</p>
                            <ul className="premium-list">
                                <li><span className="red-check">✔</span> New in-depth articles daily</li>
                                <li><span className="red-check">✔</span> Monthly audiobook</li>
                                <li><span className="red-check">✔</span> Live sports & podcasts</li>
                            </ul>
                            <button className="btn-yellow" onClick={navigateToSuccess}>2 MONTHS - 129 KR</button> 
                            <button className="btn-white" onClick={navigateToSuccess}>1 YEAR - 1490 KR</button> 
                        </div>
                        <p className="premium-description">Renews thereafter at 149 SEK/month, cancel anytime.</p>
                    </div>

                    {/* Paket 2 */}
                    <div className="premium-wrapper">
                        <div className="premium-card">
                            <div className="best-value-premium">MOST VALUE</div>
                            <h3 className="premium-package">Super Package</h3>
                            <p className="premium-info">News & podcasts at a great price!</p>
                            <ul className="premium-list">
                                <li><span className="red-check">✔</span> Aftonbladet Plus</li>
                                <li><span className="red-check">✔</span> SvD Business</li>
                                <li><span className="red-check">✔</span> Omni More & Economy</li>
                                <li><span className="red-check">✔</span> Premium podcasts</li>
                                <li><span className="red-check">✔</span> Share with a friend</li>
                            </ul>
                            <button className="btn-blue" onClick={navigateToSuccess}>2 MONTHS - 199 KR</button>
                        </div>
                        <p className="premium-description">Renews thereafter at 299 SEK/month. Save 58% – worth 715 SEK.</p>
                    </div>

                    {/* Paket 3 */}
                    <div className="premium-wrapper">
                        <div className="premium-card">
                            <div className="best-value-premium">AUDIO AND NEWS</div>
                            <h3 className="premium-package">Aftonbladet Plus & Podme</h3>
                            <p className="premium-info">News & podcasts at a great price!</p>
                            <ul className="premium-list">
                                <li><span className="red-check">✔</span> Aftonbladet Plus</li>
                                <li><span className="red-check">✔</span> <strong>New:</strong> Mardrömsgästen with Alex & Sigge</li>
                                <li><span className="red-check">✔</span> Premium podcasts from Podme</li>
                            </ul>
                            <button className="btn-black" onClick={navigateToSuccess}>2 MONTHS - 129 KR</button>
                        </div>
                        <p className="premium-description">Renews thereafter at 179 SEK/month. Cancel anytime.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PremiumPage;