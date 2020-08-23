import React from 'react'

interface ButtonProps {
    title?: string,
    classNameButton?: string
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    return (
        <button className={`btn-default ${props.classNameButton}`}>
            {props.title ? props.title : props.children}
        </button>
    )
}

export default Button