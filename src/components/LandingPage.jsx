import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import HeroTwitter from './HeroTwitter'
import Beneficios from './Beneficios'

const LandingPage = props => {
    return <>
        <div className="flex-container flex-flow-wrap header-background">
            <div className="flex-item align-left flex-up-to-down fl-1 margin-left margin-top">
                <h3 className="h3">Bienvenido a tu </h3>
                <h3 className="h3"><strong>Entrevista técnica</strong> en</h3>
                <h3 className="h3 lima"><strong>Wolox</strong></h3>
            </div>
            <div className="flex-item align-right flex-up-to-down fl-1">
                <Hero />
            </div>
        </div>
        <HeroTwitter />
        <Beneficios />
        <Footer />
    </>
};

export default LandingPage;