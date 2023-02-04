import React from 'react';
import NavSid from "../Sidebar/NavSid";
import {XMarkIcon} from "@heroicons/react/24/outline";

const SideBarActive = ({setOpenMenu}) => {
    function handleClickClose() {
        document.body.style.overflow = ''
        setOpenMenu(false)
    }
    return (
        <div
            className="burger-sid"
        >
            <NavSid />
            <div className={"burger-sid__close"}
                 onClick={handleClickClose}
            >
                <XMarkIcon />
            </div>
        </div>
    );
};

export default SideBarActive;