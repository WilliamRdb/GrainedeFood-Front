import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default class FooterMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
    
      <Menu pointing secondary vertical className="footer__menu">
        <Menu.Item
          as={Link}
          to='/CGV'
          name='CGV-CGU'
          active={activeItem === 'CGV-CGU'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/mentions-legales'
          name='Mentions Légales'
          active={activeItem === 'Mentions Légales'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/contact'
          name='Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        />
      </Menu>
  
    )
  }
}

