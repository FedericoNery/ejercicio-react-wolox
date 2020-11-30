import React from 'react'
import PropTypes from 'prop-types';

const Option = props => {
    const { name, value, className } = props
    return <>
        <option value={value} className={className}>{name}</option>
    </>
};

Option.defaultProps = {
    className: "option"
}

Option.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
  };

export default Option;

