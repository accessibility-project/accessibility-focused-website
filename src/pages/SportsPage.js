import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sports.css";
import newsImage from "../pic/bestsports.png";
import adPic from "../pic/beerad.png";
import hockeyNews from "../pic/hockey-news.png";
import hockeyNewsTwo from "../pic/CAKE.png";
import SportsHeader from "../components/SportsHeader.js";
import { fetchSportsNews, fetchDirectSports } from "../api/sportsApi";

function SportsPage() {
    const [sportsNews, setSportsNews] = useState([]);
    const [directSports, setdirectSports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getSportsData = async () => {
            const sportsNewsData = await fetchSportsNews();
            setSportsNews(sportsNewsData);

            const directSportsData = await fetchDirectSports();
            setdirectSports(directSportsData);
        };

        getSportsData();
    }, []);

    const handleNavigate = () => {
        navigate("/successpage");
    };

    useEffect(() => {
        document.body.className = "body-sports";
    }, []);

    <a href="#container" className="skip-to-content">Skip to Content</a>

    return (
        <div>

            <SportsHeader />

            <div className="top-image">
                <img src={newsImage} alt="Nyhetsbild" />
            </div>

            <div className="top-news">
                <div>
                    {/* Tre nyheter i rad */}
                    <div className="three-news">
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                        <div className="news-box">
                            <div className="sports-columns">
                                <h1 className="sports-time"> 7pm </h1>
                                <h1 className="sports-league"> - SHL (H) </h1>
                            </div>
                            <div>
                                <h1 className="sports-teams"> Frölunda - Timrå</h1>
                            </div>
                        </div>
                    </div>

                    <div className="image-container">
                        <img src={hockeyNews} alt="Nyhetsbild" />
                        <div className="sports-news-container">
                        <span
                                className="big-sports-news"
                                onClick={handleNavigate}
                            >
                                18 Penalties Handed Out – After the Final Whistle!
                            </span>
                            <h2 className="big-sports-text">Chaos erupted in last night’s hockey clash as players from both teams refused to leave the ice. The result? A staggering 18 penalties handed out post-game. "I’ve never seen anything like it," said one bewildered referee.</h2>
                        </div>
                    </div>
                </div>

                {/* Hockey-nyheten till höger om både three-news och bilden */}
                <div className="hockey-news">
                    <img src={hockeyNewsTwo} alt="Nyhetsbild" />
                </div>
            </div>

            <div className="container">
                {/* Huvudnyheter */}
                <section className="main-news">
                {sportsNews.map((news, index) => (
                    <article
                        key={news.id}
                        className="big-news-one"
                    >
                        <h2>
                            <span className={index === 0 ? "breaking-news-one-sports" : "breaking-news-sports"}>
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
                    <section className="live-feed-sports">
                        <h className="direct-sports">SPORT DIRECT</h>
                        <ul>
                            {directSports.map((news) => (
                                <li key={news.id}>
                                    <div className="info">
                                        <span className="status-dot-sports"></span>
                                        <span className="time-sports">{news.time}</span>
                                        <span className="location-sports">{news.location}</span>
                                    </div>
                                    <span
                                        className="news-text-sports"
                                        onClick={handleNavigate}
                                    >
                                        {news.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>



                    <section className="ad">
                        <div>
                            <img src={adPic} alt="Ad" />
                        </div>
                    </section>
                </aside>
                <aside className="fixed-image-column">
                </aside>
            </div>
        </div>
    );
}

export default SportsPage;
