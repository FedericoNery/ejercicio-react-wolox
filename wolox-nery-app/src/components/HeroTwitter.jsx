
import React from 'react'
import Woloxer from './Imagenes/Woloxer';

const HeroTwitter = props => {
    return <>
        <div className="flex-item align-left flex-up-to-down fl-1">
            <div className="container">
                <Woloxer />
                <div className="centered">
                    <h3>350+ Woloxers</h3>
                    <h3>@Wolox</h3>
                    <a href="https://twitter.com/Wolox">S&iacute;guenos</a>
                </div>
            </div>
        </div>
        <div className="flex-item align-right flex-up-to-down fl-1">
            <h3 className="h3">Trabajamos para&nbsp;</h3>
            <h3 className="h3">convertir ideas en&nbsp;</h3>
            <h3 className="h3">productos.</h3>
        </div>

    </>
};

export default HeroTwitter;


