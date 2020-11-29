
import React from 'react'
import Woloxer from './Imagenes/Woloxer';

const HeroTwitter = props => {
    return <>
        <div className="flex-item align-left flex-up-to-down fl-1">
            <div class="hero-image">
                <div class="hero-text">
                    <h3><span className="lima">350+</span> <span className="celeste">Woloxers</span></h3>
                    <h3>@Wolox</h3>
                    <a className="btn btn-outlined info-outline" href="https://twitter.com/Wolox">S&iacute;guenos</a>
                </div>
            </div>
            {/* <div className="container">
                <Woloxer />
                <div className="centered">
                    <h3><p className="lima">350+</p> <p className="celeste">Woloxers</p></h3>
                    <h3>@Wolox</h3>
                    <a className="btn btn-outlined info-outline" href="https://twitter.com/Wolox">S&iacute;guenos</a>
                </div>
            </div> */}
        </div>
        <div className="flex-item align-right flex-up-to-down fl-1">
            <h3 className="h3">Trabajamos para&nbsp;</h3>
            <h3 className="h3"><span className="celeste">convertir</span> <span className="lima">ideas</span> en&nbsp;</h3>
            <h3 className="h3">productos.</h3>
        </div>

    </>
};

export default HeroTwitter;


