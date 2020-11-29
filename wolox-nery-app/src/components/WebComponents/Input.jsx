import React from 'react'
import PropTypes from 'prop-types';

const Input = props => {
    const { id, name, type, className } = props
    return <>
        <input type={type} id={id} name={name} className={className} {...props}></input>
    </>
};

Input.defaultProps = {
    type: "text",
    className: "input input-round-large input-border"
  };

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

export default Input;

