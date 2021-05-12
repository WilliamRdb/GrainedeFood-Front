import React from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';
import TestPayement from 'src/containers/TestPayement';
import './style.scss'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size, dimmer: action.dimmer }
    default:
      throw new Error('Unsupported action...')
  }
}

const ModalExampleSize = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
    dimmer: undefined,
  })
  const { open, size, dimmer } = state

  return (
    <>
      <button onClick={() => dispatch({ type: 'open', size: 'mini', dimmer: 'blurring' })}>
        Payer
      </button>
      <Modal
        className='modal-payement'
        dimmer={dimmer}
        size={size}
        open={open}
        onClose={() => dispatch({ type: 'close' })}
      >
       <TestPayement />
      </Modal>
    </>
  )
}

export default ModalExampleSize
