import React from 'react';
import keySquare from '../../assest/images/nav-sid-logo/key-square.svg'
import dSquare from '../../assest/images/nav-sid-logo/3d-square 1.svg'
import discountShape from '../../assest/images/nav-sid-logo/discount-shape 1.svg'
import messageQuestion from '../../assest/images/nav-sid-logo/message-question 1.svg'
import walletMoney from '../../assest/images/nav-sid-logo/wallet-money 2.svg'
import userSquare from '../../assest/images/nav-sid-logo/user-square 1.svg'
import ArrowRight from '../../assest/images/chevron-right.svg'
import ArrowRight2 from '../../assest/images/chevron-right 2.svg'
import NavSidItem from "./NavSidItem";

const NavSid = () => {
    const navItems = [
        {
            label: 'Dashboard',
            classes: '',
            logo: keySquare,

        },
        {
            label: 'Product',
            classes: '',
            icon: ArrowRight,
            logo: dSquare,

        },
        {
            label: 'Customers',
            classes: 'sidebar-active',
            icon: ArrowRight2,
            logo: userSquare,


        },
        {
            label: 'Income',
            classes: '',
            icon: ArrowRight,
            logo: walletMoney,

        },
        {
            label: 'Promote',
            classes: '',
            icon: ArrowRight,
            logo: discountShape,

        },
        {
            label: 'Help',
            classes: '',
            icon: ArrowRight,
            logo: messageQuestion,

        },
    ]
    return (
        <nav className={'sidebar__nav'}>
            <ul className={'sidebar__list'}>
                {navItems.map(navItem =>
                    <NavSidItem key={navItem.label} icon={navItem.icon}
                                logo={navItem.logo}
                                classes={navItem?.classes}
                    >
                        {navItem.label}
                    </NavSidItem>
                )}
            </ul>

        </nav>
    );
};

export default NavSid;