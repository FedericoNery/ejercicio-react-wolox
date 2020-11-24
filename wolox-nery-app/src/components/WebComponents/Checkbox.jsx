import React from 'react'
import PropTypes from 'prop-types';

const Checkbox = props => {
    const { id, name, value, labelName } = props
    return <>
        <label for={id}>{labelName}</label>
        <input type="checkbox" id={id} name={name} value={value} {...props} />        
    </>
};

Checkbox.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
  };

export default Checkbox;