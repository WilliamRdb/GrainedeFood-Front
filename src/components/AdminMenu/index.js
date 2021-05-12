import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import './styles.scss';

const AdminMenu = ({logout}) => {

  const history = useHistory();
  const handleLogout = () => {
    logout();
    history.push('/');
  }

  return (
    <div className="admin-menu">
        <Button color='green'  as={Link} to='/admin/orders'>Commandes</Button>
        <Button color='green' as={Link} to='/admin/promos'>Codes Promo</Button>
    </div>
  )
};


export default AdminMenu;
