import React from 'react'
import PropTypes from 'prop-types';

const Input = props => {
    const { id, name } = props
    return <>
        <input type="text" id={id} name={name} {...props}></input>
    </>
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

export default Input;

