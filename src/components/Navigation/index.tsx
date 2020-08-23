import React, {useState, MouseEvent} from 'react'
import Button from '../Button'

interface MenuNavigationPropsItem {
    title: string,
    link: string
}

interface MenuNavigationPropsItems {
    items: Array<MenuNavigationPropsItem>,
    titleButton: string
}


const MenuNavigation: React.FunctionComponent<MenuNavigationPropsItems> = (props) => {

    const [classShow, setClassShow] = useState("hidden")
    const setClassMenu = (event: MouseEvent) => {
        event.preventDefault()
        if(classShow === "hidden"){
            setClassShow("visible")
        }else {
            setClassShow("hidden")
        }
    }
    return (
        <section className="header-menu-navigation">
            <section className={`header-menu-navigation-content ${classShow}`}>
                <ul className="menu-content">
                    {props.items.map(function(element, index){
                        return <li key={index}>
                            <a href={element.link}>{element.title}</a>
                        </li>
                    })}
                </ul>
                <section className="menu-callaction">
                    <Button
                        title={props.titleButton} 
                        classNameButton="btn-login"
                    />
                </section>
            </section>
            <span className="btn-default btn-hamburguer"
            onClick={setClassMenu}
            role="button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" role="Ícone mobile">
                    <g fill="#242942" fill-rule="evenodd">
                        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/>
                    </g>
                </svg>
            </span>
        </section>
    )
}

export default MenuNavigation