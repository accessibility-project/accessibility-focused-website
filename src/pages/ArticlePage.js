import React from "react";
import { useEffect } from "react";
import authorImage from "../pic/author.png";
import "../styles/Article.css";
import "../styles/Sports.css";
import newsImage from "../pic/bestsports.png";
import adPic from "../pic/beerad.png";
import SportsHeader from "../components/SportsHeader.js";

function SportsPage() {
    useEffect(() => {
        document.body.className = "body-sports";
    }, []);

    return (
        <div>

            <SportsHeader />

            <div className="top-image">
                <img src={newsImage} alt="Nyhetsbild" />
            </div>


            <div className="container">
                <section className="main-news">
                    <article className="article-page">
                        {/* Artikel-header */}
                        <header className="article-header">
                            <h1 className="headline" >Rainstorm causes chaos – five cars crash out in turn one!</h1>
                            <div className="author-info">
                                <img src={authorImage} alt="Author" className="author-image" />
                                <div>
                                    <p className="author-name">Author Author</p>
                                    <p className="publish-time">Updated 07.13 | Published 06.23</p>
                                </div>
                            </div>
                        </header>

                        {/* Artikelinnehåll */}
                        <section className="article-content">
                            <p><strong>FORMULA 1.</strong> A sudden downpour over Monza caused chaos in the very first turn as five cars slid off the track – including the championship leader.</p>
                            <p>The start looked like any other, but within three seconds several drivers lost control. “It was like driving on soap,” said the McLaren driver with a resigned sigh.</p>
                            <p>Ferrari’s hopes were crushed immediately as both cars collided with each other. “Incredibly ironic, but also typical of our season,” the team principal commented dryly.</p>
                            <p>The race was red-flagged, fans ducked under umbrellas, and the FIA has confirmed that an investigation into the start conditions is underway.</p>
                        </section>
                    </article>
                </section>

                {/* Sidokolumn */}
                <aside className="sidebar">
                    <section className="live-feed-sports">
                        <h className="direct-sports">SPORT DIRECT</h>
                        <ul>
                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">10:42</span>
                                    <span className="location-sports">CHAMPIONS LEAGUE</span>
                                </div>
                                <p className="news-text-sports">Dramatic penalty shootout sends underdog team to the final!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">09:58</span>
                                    <span className="location-sports">NFL</span>
                                </div>
                                <p className="news-text-sports">Quarterback sets new passing record – "I was just in the zone!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">09:30</span>
                                    <span className="location-sports">OLYMPICS</span>
                                </div>
                                <p className="news-text-sports">Teenager wins gold after shocking comeback – "This is unreal!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">08:45</span>
                                    <span className="location-sports">HOCKEY WORLD CUP</span>
                                </div>
                                <p className="news-text-sports">Captain ejected after massive brawl – "He went too far!"</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">08:22</span>
                                    <span className="location-sports">FORMULA 1</span>
                                </div>
                                <p className="news-text-sports">Rainstorm causes chaos – five cars crash out in turn one!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">07:55</span>
                                    <span className="location-sports">TENNIS GRAND SLAM</span>
                                </div>
                                <p className="news-text-sports">Unknown qualifier knocks out world number one in straight sets!</p>
                            </li>

                            <li>
                                <div className="info">
                                    <span className="status-dot-sports"></span> 
                                    <span className="time-sports">07:30</span>
                                    <span className="location-sports">EXTREME SPORTS</span>
                                </div>
                                <p className="news-text-sports">Skateboarder lands never-before-seen trick – judges speechless!</p>
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

export default SportsPage;
