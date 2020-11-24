import React from 'react'

const FieldError = (props) => {
    const { errorLabel } = props

    return (<>
        {
            errorLabel && <label>{errorLabel}</label>
        }
        {props.children}
    </>)
}

export default FieldError