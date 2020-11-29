import React from 'react'
import PropTypes from 'prop-types';

const Checkbox = props => {
    const { id, name, value, labelName, className } = props
    return <>
        <input type="checkbox" id={id} name={name} value={value} className={className} {...props} />        
        <label for={id}>{labelName}</label>
    </>
};


Checkbox.defaultProps ={
    className: "check"
}

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string
  };

export default Checkbox;