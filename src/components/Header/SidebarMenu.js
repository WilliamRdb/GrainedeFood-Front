import React from 'react'
import {  NavLink, useHistory } from 'react-router-dom';
import { Checkbox, Menu, Sidebar, Icon } from 'semantic-ui-react';
import './styles.scss';

const SidebarMenu = ({ logged, logout, role }) => {
  const [visible, setVisible] = React.useState(false)
  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
    setVisible(false)
  }
  console.log('State role:' , role);
   return (
    <>
      <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='wide'
            direction='right'
          >
      <Menu secondary stackable className="header__navbar">
            
            <Menu.Item
            
            name='Concept'
            className="header__navbar__menu__link"
            type='button' 
            as={NavLink} 
            to='/concept'
            onClick={() => setVisible(false)}
            >Concept</Menu.Item>

         
            <Menu.Item
            name="Je m'abonne"
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/abonnement'
            onClick={() => setVisible(false)}
            >Je m'abonne</Menu.Item>
            
            {logged && role==='admin' && (
            <Menu.Item
            name="Je m'abonne"
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/admin/orders'
            onClick={() => setVisible(false)}
            >Admin</Menu.Item>
            )}
            
            {logged ? ( 
              <>
            <Menu.Item
            name='Mon Compte'
            className="header__navbar__menu__link"
            as={NavLink} 
            to='/mon-compte'
            onClick={() => setVisible(false)}
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
            onClick={() => setVisible(false)}
            >Se connecter</Menu.Item>

            )
            } 

      </Menu>
      </Sidebar>
      <div className="sidebar-container">
      <Checkbox
          checked={visible}
          onChange={(e, data) => setVisible(data.checked)}
          className="sidebar-checkbox"
        />
      {!visible && <Icon name='sidebar' size='large' className="sidebar-closed" />}
      {visible && <Icon name='close' size='large' className="sidebar-open" />}
      </div>
    </>
  )

};

export default SidebarMenu;

