import React from 'react'

const FieldError = (props) => {
    const { errors } = props

    return (<>
        {
            errors && errors.length > 0 && errors.map(item => <p className="label-error">{item}</p>)
        }
        {props.children}
    </>)
}

export default FieldError