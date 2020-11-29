import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import LogoWolox from './Logos/LogoWolox';

const Header = props => {
    const { isLogged, favouriteTechs, history } = props

    return <div className="flex-container header flex-flow-wrap">
        <div className="flex-item fl-3 align-left flex-up-to-down">
            <LogoWolox />
        </div>
        <div className="flex-item align-right flex-up-to-down">
            <a className="anchor-base" href="/#home">Inicio</a>
            <a className="anchor-base" href="/#contact">Beneficios</a>
            {!isLogged && <a href="/login" className="btn btn-outlined info-outline vertical-align-top"><strong>Login</strong></a>}
            {!isLogged && <a href="/register" className="btn btn-outlined info-outline vertical-align-top"><strong>Registrarse</strong></a>}
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

