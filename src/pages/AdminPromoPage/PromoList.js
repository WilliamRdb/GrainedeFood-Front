import React from 'react';
import { Icon, Table } from 'semantic-ui-react'
import './styles.scss';
import api from 'src/api';


const PromoList = ({ promosData, searchCodePromo }) => {

  const onDeleteClick = (promoToDelete, e) => {
    api.delete(`/promo/${promoToDelete}`)
    .then(() => window.location.reload())
    .catch((error) => console.error(error))
  }

  return(

  <Table celled id="promoList">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Code</Table.HeaderCell>
        <Table.HeaderCell>%</Table.HeaderCell>
        <Table.HeaderCell>Date de début</Table.HeaderCell>
          <Table.HeaderCell>Date de fin</Table.HeaderCell>
        <Table.HeaderCell>Supprimer</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {promosData.map((promo) => (
      <Table.Row key={promo.id}>
        <Table.Cell>{promo.code}</Table.Cell>
        <Table.Cell>{promo.pourcent}</Table.Cell>
        <Table.Cell>{promo.start_date}</Table.Cell>
        <Table.Cell>{promo.end_date}</Table.Cell>
        <Table.Cell>
          <Icon name='delete' size='large' onClick={(e) => onDeleteClick(promo.code, e)} />

        </Table.Cell>
      </Table.Row>

      ))}
      
    </Table.Body>
  </Table>
)
}

export default PromoList;
