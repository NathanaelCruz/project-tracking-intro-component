import React from 'react'
import LogoProject from '../../assets/images/logo.svg'

const Logo = () => {
    return (
        <a href="/" className="header-link">
            <img src={LogoProject} alt="Logo do site" className="header-link-logo"/>
        </a>
    )
}

export default Logo