import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import newsImage from "../pic/breaking-news.jpg";
import adPic from "../pic/beerad.png";
import HomeHeader from "../components/HomeHeader.js";
import { fetchBreakingNews, fetchLiveFeed } from "../api/newsApi.js";


function HomePage() {
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
    

    return (
        <div>

            {/* Skip link for keyboard users */}
            <a href="#container" className="skip-to-content">Skip to Content</a>

            <HomeHeader />

            <div className="top-image" tabIndex="0">
                <img src={newsImage} alt="Man in a newspage studio" />
            </div>

            <div className="container">
                {/* Huvudnyheter */}
                <section className="main-news">
                    {breakingNews.map((news, index) => (
                        <article
                            key={news.id}
                            tabIndex="0"
                            className={index === 0 ? "big-news-one" : "big-news"}
                        >
                            <h2>
                                <span className={index === 0 ? "breaking-news-one" : "breaking-news"}>
                                    BREAKING NEWS:
                                </span>
                                <span
                                    className={index === 0 ? "headline-one" : "headline"}
                                    onClick={handleNavigate}
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
                                        onClick={handleNavigate}
                                    >
                                        {news.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>



                    <section className="ad" tabIndex="0">
                        <div>
                            <img src={adPic} alt="Ad for Empower beer" />
                        </div>
                    </section>
                </aside>
                <aside className="fixed-image-column">
                </aside>
            </div>
        </div>
    );
}

export default HomePage;
