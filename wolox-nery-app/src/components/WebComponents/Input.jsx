import React from 'react'
import PropTypes from 'prop-types';

const Input = props => {
    const { id, name, type } = props
    return <>
        <input type={type} id={id} name={name} {...props}></input>
    </>
};

Input.defaultProps = {
    type: "text",
  };

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

export default Input;

