import React from 'react';
import './styles.scss';
import FooterMenu from './FooterMenu'
import SocialMenu from './SocialMenu'
import LegalText from './LegalText'
const Footer = () => {
    return (
    <div className="footer">
        <FooterMenu /> 
        <SocialMenu />
        <LegalText />
    </div>
    );
};

export default Footer;
