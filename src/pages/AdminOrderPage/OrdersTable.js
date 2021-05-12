import React from 'react';
import { Table } from 'semantic-ui-react'
import './styles.scss';

const OrdersTable = ({ usersData }) => {
  return (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Nom</Table.HeaderCell>
        <Table.HeaderCell>Prénom</Table.HeaderCell>
        <Table.HeaderCell>Adresse de livraison</Table.HeaderCell>
        <Table.HeaderCell>Code Postal</Table.HeaderCell>
        <Table.HeaderCell>Ville</Table.HeaderCell>
        <Table.HeaderCell>Vegan</Table.HeaderCell>
        <Table.HeaderCell>Box restantes à envoyer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>


    <Table.Body>
    {usersData.map((user) => (
    <Table.Row key={user.id}>
      <Table.Cell>{user.status ? 'Actif' : 'Inactif'}</Table.Cell>
      <Table.Cell>{user.last_name}</Table.Cell>
      <Table.Cell>{user.first_name}</Table.Cell>
      <Table.Cell>{user.delivery_address}</Table.Cell>
      <Table.Cell>{user.delivery_postcode}</Table.Cell>
      <Table.Cell>{user.delivery_city}</Table.Cell>
      <Table.Cell>{user.vegan ? "Oui" : "Non" }</Table.Cell>
      <Table.Cell>{user.points}</Table.Cell>
    </Table.Row>
    ))}
       </Table.Body>
  </Table>
  )
  }

export default OrdersTable;
