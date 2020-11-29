import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import HeroTwitter from './HeroTwitter'
import Beneficios from './Beneficios'

const LandingPage = props => {
    return <>
        <div className="flex-container flex-flow-wrap">
            <div className="flex-item align-left flex-up-to-down fl-1">
                <h3 className="h3">Bienvenido a tu </h3>
                <h3 className="h3"><strong>Entrevista técnica</strong> en</h3>
                <h3 className="h3 lima">Wolox</h3>
            </div>
            <div className="flex-item align-right flex-up-to-down fl-1">
                <Hero />
            </div>
        </div>
        <div className="flex-container flex-direction-row">
            <HeroTwitter />
        </div>
        <div className="flex-container flex-flow-wrap">
            <Beneficios />
        </div>
        <div className="flex-container flex-flow-column footer">
            <Footer />
        </div>
    </>
};

export default LandingPage;