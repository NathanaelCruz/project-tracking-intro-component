import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string,
    classNameButton?: string
}
const Button: React.FunctionComponent<ButtonProps> = (props) => {
    
    return (
        <button 
            className={`btn-default ${(props.classNameButton) ? props.classNameButton : ''}`}
            
        >
            {props.title ? props.title : props.children}
        </button>
    )
}

export default Button