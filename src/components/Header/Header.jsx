import React from 'react';
import LogoDashboard from "../Logo";
import {CONTAINER} from "../../utils/constAll";
import {Bars3Icon} from "@heroicons/react/24/outline";

const Header = ({setOpenMenu}) => {
    function handleClick() {
        document.body.style.overflow = 'hidden'
        setOpenMenu(true)
    }
    return (
        <header className={"header"}>
            <div className={`header__${CONTAINER}`}>
                <div className={"header__logo"}>
                    <LogoDashboard/>
                    <div className={'header__burger burger'}
                         onClick={handleClick}
                    >
                        <Bars3Icon/>
                    </div>


                </div>
                <div className={"header__title"}>
                    Hello Evano 👋🏼,
                </div>

            </div>

        </header>
    );
};

export default Header;