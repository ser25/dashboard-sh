import React from 'react';
import {CONTAINER} from "../../utils/constAll";
import footerLogo from '../../assest/images/footer-logo.png'
const Footer = () => {
    return (
        <div className={`footer__${CONTAINER}`}>
            <div className="footer__logo">
                <img src={footerLogo} alt=""/>
            </div>
            <div className="footer__body">
                <div className="footer__title">
                    Evano
                </div>
                <div className="footer__text">
                    Project Manager
                </div>
            </div>
        </div>
    );
};

export default Footer;