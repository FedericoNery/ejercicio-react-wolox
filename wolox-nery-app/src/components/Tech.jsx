import React from 'react'
import PropTypes from 'prop-types';

const Tech = props => {
    const { tech, year, author, license, language, type, logo  } = props
    return <>
        <p>{tech}</p>
        <p>{year}</p>
        <p>{author}</p>
        <p>{license}</p>
        <p>{language}</p>
        <p>{type}</p>
        <img src={logo} alt={language}/>
    </>
};

Tech.propTypes = {
    tech: PropTypes.string, 
    year: PropTypes.string,  
    author: PropTypes.string, 
    license: PropTypes.string, 
    language: PropTypes.string, 
    type: PropTypes.string, 
    logo: PropTypes.string,
  };

export default Tech;