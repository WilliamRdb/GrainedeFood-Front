import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

function UserModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      centered={false}
      open={open}
      dimmer="blurring"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<button>Enregistrer les modifications</button>}
    >
      <Modal.Header>Merci !</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Vos modifications ont bien été prises en compte !
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UserModal
