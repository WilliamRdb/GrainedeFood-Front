import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react';
import UserModal from '/src/pages/UserPage/UserModal.js';

const UserInformations = ({setEmailUpdate, setLastnameUpdate, setFirstnameUpdate, setInvoiceAddressUpdate, setInvoicePostCodeUpdate, setInvoiceCityUpdate, setDeliveryAddressUpdate, setDeliveryPostCodeUpdate, setDeliveryCityUpdate, email,
lastname,
firstname,
invoiceAddress,
invoicePostCode,
invoiceCity,
deliveryAddress,  
deliveryPostCode,
deliveryCity, submitUpdate}) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        submitUpdate();
    }
    return (
        <div className="userpage">
            <div className="userpage__informations">
                <form 
                    action="submit"
                    method="get"
                    className="userpage__informations--form"
                    onSubmit={handleOnSubmit}
                >
                        <h2 className="userpage__informations__title">
                            Mes informations personnelles
                        </h2>
                        <div className="userpage__informations__input">
                            <Input
                                name="nom"
                                className="userpage__informations__input__content"
                                placeholder='Nom'
                                value={lastname}
                                onChange={(e) => {setLastnameUpdate(e.target.value)}}
                            />
                            <Input
                                name="prenom"
                                className="userpage__informations__input__content"
                                placeholder='Prénom'
                                value={firstname}
                                onChange={(e) => setFirstnameUpdate(e.target.value)}
                            />
                            <Input
                                name="email"
                                className="userpage__informations__input__content"
                                placeholder='email'
                                value={email}
                                onChange={(e) => {setEmailUpdate(e.target.value)}}
                            />
                        </div>
                        <div className="userpage__informations__checkbox">
                        <Checkbox
                                className="userpage__informations__checkbox__content"
                                label="Je souhaite une option végan pour mes box"
                            />
                        </div>
                        <div className="userpage__informations__address">
                            <h2 className="userpage__informations__address__title">
                                Adresse de livraison
                            </h2>
                            <div className="userpage__informations__address__delivery">
                                <Input
                                    name="adresse"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Adresse'
                                    value={deliveryAddress}
                                    onChange={(e) => {setDeliveryAddressUpdate(e.target.value)}}
                                    />
                                <Input
                                    name="code_postal"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Code postal'
                                    value={deliveryPostCode}
                                    onChange={(e) => {setDeliveryPostCodeUpdate(e.target.value)}}
                                    />
                                <Input
                                    name="ville"
                                    className="userpage__informations__address__delivery__input__content"
                                    placeholder='Ville'
                                    value={deliveryCity}
                                    onChange={(e) => {setDeliveryCityUpdate(e.target.value)}}
                                    />
                            </div>
                            <h2 className="userpage__informations__address__title">
                                Adresse de facturation
                            </h2>
                            <div className="userpage__informations__address__invoice">
                            <Input
                                    name="adresse"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Adresse'
                                    value={invoiceAddress}
                                    onChange={(e) => {setInvoiceAddressUpdate(e.target.value)}}
                                    />
                                <Input
                                    name="code_postal"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Code postal'
                                    value={invoicePostCode}
                                    onChange={(e) => {setInvoicePostCodeUpdate(e.target.value)}}
                                    />
                                <Input
                                    name="ville"
                                    className="userpage__informations__address__invoice__input__content"
                                    placeholder='Ville'
                                    value={invoiceCity}
                                    onChange={(e) => {setInvoiceCityUpdate(e.target.value)}}
                                    />
                            </div>
                        </div>
                    <UserModal />
                </form>
            </div>
        </div>
    );
};

export default UserInformations;
