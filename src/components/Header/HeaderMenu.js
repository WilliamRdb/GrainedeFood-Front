import React from 'react'
import {  NavLink, useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './styles.scss';

const HeaderMenu = ({ logged, logout, role }) => {
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
  }
  console.log('State role:' , role);
   return (
 
      <Menu secondary className="header__navbar">
            
            <Menu.Item
            
            name='Concept'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/concept'
            >Concept</Menu.Item>

         
            <Menu.Item
            name="Je m'abonne"
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/abonnement'
            >Je m'abonne</Menu.Item>
            
            {logged && role==='admin' && (
            <Menu.Item
            name="Je m'abonne"
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/admin/orders'
            >Admin</Menu.Item>
            )}
            
            {logged ? ( 
              <>
            <Menu.Item
            name='Mon Compte'
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/mon-compte'
            >Mon Compte </Menu.Item> 

            <Menu.Item
            name='Déconnexion'
            className="header__navbar__menu__link"
            type='button' 
            onClick={handleLogout}
            >Se déconnecter</Menu.Item>
            </>) : (
            <Menu.Item
            name='Connexion'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/login'
            >Se connecter</Menu.Item>

            )
            } 

      </Menu>

  )

};

export default HeaderMenu;
