import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import './styles.scss';

const SocialMenu = () => (
    <List horizontal className="footer__social">
    <List.Item>

    <a href="https://www.facebook.com/grainedemagie/" target="_blank"> <Icon name='facebook f' size='big' /></a> 
    </List.Item>
    <List.Item>
      <a href="https://www.instagram.com/grainedemagie/?hl=fr" target="_blank"> <Icon name='instagram' size='big' /> </a>
    </List.Item>
    <List.Item>
       <a href="https://twitter.com/melainechou?lang=fr" target="_blank">  <Icon name='twitter' size='big' /></a> 
    </List.Item>
  </List>
)

export default SocialMenu;
