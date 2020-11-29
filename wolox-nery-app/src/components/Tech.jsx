import React from 'react'
import PropTypes from 'prop-types';

const Tech = props => {
    const { tech, year, author, license, language, type, logo } = props
    return <>
        <div className="flex-container">
            <div className="flex-item-fs">
                <p>{tech}</p>
            </div>
            <div className="flex-item-fs">
                <p>{year}</p>
            </div>
            <div className="flex-item-fs">
                <p>{author}</p>
            </div>
            <div className="flex-item-fs">
                <p>{license}</p>
            </div>
            <div className="flex-item-fs">
                <p>{language}</p>
            </div>
            <div className="flex-item-fs">
                <p>{type}</p>
            </div>
            <div className="flex-item-fs">
                <img src={logo} alt={language} />
            </div>
        </div>
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