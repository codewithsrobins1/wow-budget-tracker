import React from 'react'

const LandingPage = () => {

    //Anchor Link for Button
    const onClick = () => {
        window.location.href="#app-title"
    }

    return (
        <div className="landing-page">
            <nav>
                <h2>WoW Gold Tracker</h2>
                <ul className="nav-links">
                    <li><a href="#app-title">Application</a></li>
                    <li><a href="https://theunderminejournal.com/#us/illidan" target="_blank" rel="noopener noreferrer">News</a></li>
                </ul>
            </nav>

            <div className="hero-section">
                <div className="hero-section__heading">
                    <h2>Track your gold spending</h2>
                    <p className="hero-section__description">A web application to track your gold income and expense transactions in <span id="wow">World of Warcraft</span>.</p>
                    <button className="hero-button" onClick={onClick}>Get Started</button>
                </div>
                <img className="hero-svg" src="./images/counting.svg" alt="gaming"/>
            </div>

            <img className="wave-svg" src="./images/wave2.svg" alt="wave svg"/>
        </div>
    )
}

export default LandingPage;
