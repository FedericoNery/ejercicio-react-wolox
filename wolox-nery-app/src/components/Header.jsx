import React from 'react'
import LogoWolox from './Logos/LogoWolox';

const Header = props => {
    return <div className="header">
        <LogoWolox />
        <div className="header-right">
            <a href="#home">Inicio</a>
            <a href="#contact">Beneficios</a>
            <button>Login</button>
        </div>
    </div>
};

export default Header;

