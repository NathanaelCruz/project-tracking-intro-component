import React from 'react'
import Logo from '../Logo'
import MenuNavigation from '../Navigation'

const Header = () => {
    return (
        <header className="header-main">
            <Logo />
            <MenuNavigation 
                items={[
                    {"title":"PRODUCT", "link":"/product"},
                    {"title":"FEATURES", "link":"/features"},
                    {"title":"PRICING", "link":"/pricing"}
                ]}
                titleButton="LOGIN"
             />
        </header>
    )
}

export default Header