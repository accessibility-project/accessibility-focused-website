import React from "react";
import "../styles/Home.css";
import newsImage from "../pic/breaking-news.jpg";
import adPic from "../pic/beerad.png";
import HomeHeader from "../components/HomeHeader.js";

function HomePage() {

    return (
        <div>

            <a href="#container" className="skip-to-content">Skip to Content</a>

            <HomeHeader />

            <div className="top-image">
                <img src={newsImage} alt="Nyhetsbild" />
            </div>

            <div className="container">
                {/* Huvudnyheter */}
                <section className="main-news">
                    <article className="big-news-one">
                        <h2>
                            <span className="breaking-news-one">BREAKING NEWS:</span> 
                            <span className="headline-one">Lost Amazon Tribe Makes First Contact with the Modern World</span>
                        </h2>
                        <p className="news-description-one">After centuries of isolation, an uncontacted Amazonian tribe has emerged, demanding WiFi and avocados.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Beauty Heist Shocks the Nation</span>
                        </h2>
                        <p className="news-description">Reports suggest thieves stole thousands of dollars worth of Botox and fillers ✔ Escaped in a runaway bulldozer.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Aliens Demand Citizenship</span>
                        </h2>
                        <p className="news-description">Extraterrestrials land in New York, claim they have been living here for centuries disguised as government officials.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Time Traveler Arrested for Insider Trading</span>
                        </h2>
                        <p className="news-description">Man claims to be from the year 2087, caught making suspiciously accurate stock market bets.</p>
                    </article>

                    <article className="big-news">
                        <h2>
                            <span className="breaking-news">BREAKING NEWS:</span> 
                            <span className="headline">Florida Man Wins Lawsuit Against Gravity</span>
                        </h2>
                        <p className="news-description">Court rules that gravity "personally inconvenienced" him after he tripped on a banana peel.</p>
                    </article>
                </section>


                {/* Sidokolumn */}
                <aside className="sidebar">
                    <section className="live-feed">
                        <h className="direct">DIRECT NEWS</h>
                        <ul>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">09:13</span>
                                    <span className="location">MARS</span>
                                </div>
                                <p className="news-text">NASA loses contact with Mars rover after it "joins a union".</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:58</span>
                                    <span className="location">VATICAN CITY</span>
                                </div>
                                <p className="news-text">Pope accidentally tweets "LOL" after mysterious UFO sighting.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:17</span>
                                    <span className="location">ATLANTIS</span>
                                </div>
                                <p className="news-text">Lost city of Atlantis found—turns out it's just a fancy resort.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">SPACEX</span>
                                </div>
                                <p className="news-text">Elon Musk announces mission to send influencers to Pluto—"one-way only".</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">WORLD CUP</span>
                                </div>
                                <p className="news-text">Referee sends himself off after controversial VAR decision.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">HOLLYWOOD</span>
                                </div>
                                <p className="news-text">Hollywood announces new movie: "Fast & Furious 47"—this time, in space.</p>
                            </li>
                            <li>
                                <div className="info">
                                    <span className="status-dot"></span> 
                                    <span className="time">08:03</span>
                                    <span className="location">SWEDEN</span>
                                </div>
                                <p className="news-text">Scientists confirm: The Swedish summer actually lasts 17 minutes.</p>
                            </li>
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

export default HomePage;
