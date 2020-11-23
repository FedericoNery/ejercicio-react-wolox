import React from 'react'
import PropTypes from 'prop-types';
import Option from './Option';

const Select = props => {
    const { id, name, options } = props
    return <>
        {/* <label for="cars">Choose a car:</label> */}
        <select name={name} id={id} {...props}>
            {
                options.length > 0 && options.map((item) => {
                return <Option value={item.value} name={item.name} />
                })
            }
        </select>
    </>
};

Select.defaultProps = {
    options: []
  };

Select.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape(
        {
           value: PropTypes.string,
           name: PropTypes.string 
        }
    ))
  };

export default Select;



