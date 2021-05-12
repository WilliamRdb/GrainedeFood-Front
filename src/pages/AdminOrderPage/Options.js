import React from 'react';
import { Icon, Button, Menu } from 'semantic-ui-react'
import './styles.scss';
import exportFromJSON from 'export-from-json'

const Options = ({ usersData }) => {

const data =[]
const userWithoutPassword = usersData.map((user) => ({...user, password: "***"}))
userWithoutPassword.map((user) => ( data.push(user)))
console.log(userWithoutPassword)
const fileName = 'download'
const exportType = 'csv'

const exportData = () => {

exportFromJSON({ data, fileName, exportType })
}

return (
  <div>
      <Icon name='external alternate' size='large' />
      <Button color='red' onClick={exportData}>Exporter les données</Button>
  </div>
);
}

export default Options;
