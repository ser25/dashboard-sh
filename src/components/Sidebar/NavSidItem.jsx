import React from 'react';

const NavSidItem = ({children: label, icon, logo, classes}) => {
    return (
        <li className={`sidebar__item ${classes}`}
        >
            <div className={'sidebar__image'}>
                <img src={logo} alt=""/>
            </div>

            <div className={'sidebar__body'}>
                <a className={'sidebar__link'} href="/">{label}</a>
                {icon && <img className={'sidebar__icon'} src={icon} alt="arrow-right"/>}
            </div>


        </li>
    );
};

export default NavSidItem;