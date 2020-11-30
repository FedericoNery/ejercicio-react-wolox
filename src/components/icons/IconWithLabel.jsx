import React from 'react'
import PropTypes from 'prop-types';

const IconWithLabel = props => {
    const { icon, text } = props
    return <>
        <div className="flex-item fl-6">
            {icon}
            <h6 className="epigrafe">{text}</h6>
        </div>
    </>
};

IconWithLabel.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
};

export default IconWithLabel;