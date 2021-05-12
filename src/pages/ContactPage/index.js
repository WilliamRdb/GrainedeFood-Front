import React from 'react';
import { Button, Form } from 'semantic-ui-react'
import './styles.scss';

const ContactPage = () => (
  <div className="contact-form">
    <h1>Service Client - Contactez-Nous</h1>
    <div className="contact-form__container">
      <Form size='large' className="contact-form__form">
        <Form.Field>
          <input placeholder='Nom' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Prénom' />
        </Form.Field>
        <Form.Field>
          <input placeholder='Email' />
        </Form.Field>
        <Form.TextArea placeholder='Message' />
        <Button type='submit' color='black'>Envoyer</Button>
      </Form>
      <div className="contact-form__address">Graine de Food<br/>Rue de la République<br/>11111 Ville<br/>contact@grainedefood.com</div>
    </div>
  </div>
);

export default ContactPage;
