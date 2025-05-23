import React, { useState, useEffect, useContext } from "react";
import { ClickCounterContext } from "../context/ClickCounterContext";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import newsImage from "../pic/breaking-news.jpg";
import adPic from "../pic/beerad.png";
import HomeHeader from "../components/HomeHeader.js";
import { fetchBreakingNews, fetchLiveFeed } from "../api/newsApi.js";


function HomePage() {
    const { setClickCount } = useContext(ClickCounterContext);
    const [resetMessage, setResetMessage] = useState("");
    const [breakingNews, setBreakingNews] = useState([]);
    const [liveFeed, setLiveFeed] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getNews = async () => {
            const breakingNewsData = await fetchBreakingNews();
            setBreakingNews(breakingNewsData);

            const liveFeedData = await fetchLiveFeed();
            setLiveFeed(liveFeedData);
        };

        getNews();
    }, []);

    const handleNavigate = () => {
        navigate("/successpage");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleNavigate();
        }
    };
    

    return (
        <div>

            {/* Skip link for keyboard users */}
            <a href="#container" className="skip-to-content">Skip to Content</a>

            <HomeHeader />

            <div className="top-image" tabIndex="0" onKeyDown={handleKeyPress}>
                <img src={newsImage} alt="Man in a newspage studio" />
            </div>

            <div className="container">
                {/* Huvudnyheter */}
                <section className="main-news">
                    {breakingNews.map((news, index) => (
                        <article
                            key={news.id}
                            className={index === 0 ? "big-news-one" : "big-news"}
                        >
                            <h2>
                                <span className={index === 0 ? "breaking-news-one" : "breaking-news"}>
                                    BREAKING NEWS:
                                </span>
                                <span
                                    className={index === 0 ? "headline-one" : "headline"}
                                    tabIndex="0" onKeyDown={handleKeyPress} onClick={handleNavigate}
                                >
                                    {news.title}
                                </span>
                            </h2>
                            <p className={index === 0 ? "news-description-one" : "news-description"}>
                                {news.description}
                            </p>
                        </article>
                    ))}
                </section>

                {/* Sidokolumn */}
                <aside className="sidebar">
                    <section className="live-feed">
                        <h className="direct">DIRECT NEWS</h>
                        <ul>
                            {liveFeed.map((news) => (
                                <li key={news.id}>
                                    <div className="info">
                                        <span className="status-dot"></span>
                                        <span className="time">{news.time}</span>
                                        <span className="location">{news.location}</span>
                                    </div>
                                    <span
                                        className="news-text"
                                        tabIndex="0"
                                        onKeyDown={handleKeyPress}
                                        onClick={handleNavigate}
                                    >
                                        {news.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>



                    <section className="ad" tabIndex="0" onKeyDown={handleKeyPress}>
                        <div>
                            <img src={adPic} alt="Ad for Empower beer" />
                        </div>
                    </section>
                </aside>
                <aside className="fixed-image-column">
                </aside>
            </div>

            <a 
                href="#" 
                onClick={(e) => {
                    e.preventDefault();
                    setClickCount(0);
                    localStorage.removeItem("clickCount");
                    setResetMessage("Klickräknaren är nollställd!");
                }} 
                style={{ display: "block", textAlign: "center", marginTop: "2rem", cursor: "pointer", color: "blue", textDecoration: "underline" }}
            >
                Nollställ klickräknaren
            </a>
            {resetMessage && (
                <p style={{ textAlign: "center", color: "blue", marginTop: "1rem" }}>
                    {resetMessage}
                </p>
            )}
        </div>
    );
}

export default HomePage;
