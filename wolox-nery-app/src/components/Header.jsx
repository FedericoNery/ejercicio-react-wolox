import React from 'react'
import { connect } from 'react-redux';
import LogoWolox from './Logos/LogoWolox';

const Header = props => {
    const { isLogged, favouriteTechs } = props

    return <div className="flex-container header flex-flow-wrap">
        <div className="flex-item fl-3 align-left flex-up-to-down">
            <LogoWolox />
        </div>
        <div className="flex-item align-right flex-up-to-down">
            <a href="#home">Inicio</a>
            <a href="#contact">Beneficios</a>
            {!isLogged && <button>Login</button>}
            {!isLogged && <button>Registrarse</button>}
            {
                favouriteTechs.length > 0 && <p>Tecnolog&iacute;as favoritas{favouriteTechs.length}</p>
            }
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
        isLogged: state.authenticationReducer.isLogged,
        favouriteTechs: state.techsReducer.favouriteTechs,
    }
}

export default connect(mapStateToProps)(Header);

