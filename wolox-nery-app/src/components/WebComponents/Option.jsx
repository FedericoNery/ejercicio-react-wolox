import React from 'react'
import PropTypes from 'prop-types';

const Option = props => {
    const { name, value } = props
    return <>
        <option value={value}>{name}</option>
    </>
};

Option.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
  };

export default Option;

