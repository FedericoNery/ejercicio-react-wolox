import React from 'react'

const Footer = props => {
    return  <div className="flex-container flex-flow-column footer">
        <div className="flex-item flex-auto">
            <h3 className="h3"><strong>Gracias por <span className="celeste">completar el ejercicio</span></strong></h3>
            <h6 className="h4-nomargin">Te invitamos a ver mas informaci&oacute;n</h6>
            <a className="btn info" href="https://www.wolox.com.ar/">Conocer m&aacute;s</a>
        </div>
    </div>
};

export default Footer;