import React from 'react';
import api from 'src/api';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

const DeleteUser = ({logout, id }) => {
  const [open, setOpen] = React.useState(false)
  const history = useHistory()
  const handleOnClick = (e) => {
    api.delete(`/user/${id}`)
    .then(()=> setOpen(false))
    .then(()=> logout())
    .then(()=> history.push('/'))
    .catch((error) => console.error(error))
  }

    return (
        <div className="userpage">
            <div className="userpage__informations__deleteCount">
                <h2>Supprimer mon compte</h2>
                <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<button>Oubliez-Moi </button>}
    >
      <Header icon>
        <Icon name='archive' />
        Supprimer mes données
      </Header>
      <Modal.Content>
        <p>
          Etes-vous sûr de vouloir définitivement nous quitter ? 
        </p>
        <p>Sachez que cette action est définitive, si vous aviez un abonnement en cours,</p>
        <p>il ne pourra être maintenu. Vous ne bénéficierai plus de votre offre</p>
        <p>Toujours prêt pour la suppression ?</p>

      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> Non
        </Button>
        <Button color='green' inverted onClick={(e) => handleOnClick()}>
          <Icon name='checkmark' /> Oui
        </Button>
      </Modal.Actions>
    </Modal>
            </div>
        </div>
    );
};

export default DeleteUser;
