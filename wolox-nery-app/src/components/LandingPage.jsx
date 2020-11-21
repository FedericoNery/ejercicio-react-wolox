import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import HeroTwitter from './HeroTwitter'

const LandingPage = props => {
    return <>
        <h1>Bienvenido a tu </h1>
        <h1><strong>Entrevista técnica</strong> en</h1>
        <h1>Wolox</h1>
        <Hero />
        <HeroTwitter />
        <Footer />
    </>
  };
  
  export default LandingPage;