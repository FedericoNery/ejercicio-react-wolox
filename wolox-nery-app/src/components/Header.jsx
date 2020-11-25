import React from 'react'
import { connect } from 'react-redux';
import LogoWolox from './Logos/LogoWolox';

const Header = props => {    
    const { isLogged } = props

    return <div className="header">
        <LogoWolox />
        <div className="header-right">
            <a href="#home">Inicio</a>
            <a href="#contact">Beneficios</a>
            {!isLogged && <button>Login</button>}
            {!isLogged && <button>Registrarse</button>}
        </div>
    </div>
};

const mapStateToProps = state => {
    return {
      isLogged: state.authenticationReducer.isLogged,
    }
  }
  
  export default connect(mapStateToProps)(Header);

