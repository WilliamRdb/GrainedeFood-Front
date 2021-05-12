import { createMedia } from '@artsy/fresnel'
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from 'src/assets/images/Logo_grainedefood.png';
import HeaderMenu from '/src/containers/HeaderMenu/index.js'
import SidebarMenu from '/src/containers/SidebarMenu/index.js'

import './styles.scss';

const Header = () => {

  const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
      mobile: 0,
      desktop_tablet: 760,
    },
  })

    return (
   
        <div className="header">
          <div className="header__logo">
              <Link to='/'>
              <img className="header__logo__img" src={logo} alt="logo de Grainedefood" ></img>
              </Link>
          </div>

          <MediaContextProvider>
              <Media greaterThanOrEqual="desktop_tablet">
                <HeaderMenu />
              </Media>
              <Media at="mobile">
                <SidebarMenu />
              </Media>
          </MediaContextProvider>
        </div>

    );
};

export default Header;
