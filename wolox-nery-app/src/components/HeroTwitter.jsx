
import React from 'react'

const HeroTwitter = props => {
    return <div className="flex-container flex-direction-row">
        <div className="flex-item align-left flex-up-to-down fl-1">
            <div class="hero-image">
                <div class="hero-text">
                    <h3>
                        <span className="lima">
                            <strong>350 +&nbsp;</strong>
                        </span>
                        <strong><span className="celeste">
                            Woloxers
                        </span></strong>
                    </h3>
                    <p className="large-font">@Wolox</p>
                    <a className="btn btn-outlined info-outline" href="https://twitter.com/Wolox">S&iacute;guenos</a>
                </div>
            </div>
        </div>
        <div className="flex-item flex-up-to-down fl-1 background-color-lightsteelblue align-center hero-twitter-text-align">
                <h3 className="h3">Trabajamos para&nbsp;</h3>
                <h3 className="h3">
                    <span className="celeste-bis"><strong>convertir&nbsp;</strong></span>
                    <span className="lima-bis"><strong>ideas</strong></span> en&nbsp;
                </h3>
                <h3 className="h3">productos.</h3>
        </div>
    </div>
};

export default HeroTwitter;


