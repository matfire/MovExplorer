import React from 'react'


const SidebarNavItem = ({ name, icon, className = "" , onClick}) => (
    <div className={"sidebar__menu__category " + className} onClick={onClick}>
        <span className="sidebar__menu__category__icon">{icon}</span>
        <span className="sidebar__menu__category__title">{name}</span>
    </div>
)

export default SidebarNavItem