import React from 'react';
import { Input, Checkbox } from 'semantic-ui-react'



const Signup = ({setEmailSignup, setPasswordSignup, setPasswordConfirmSignup, setLastnameSignup, setFirstnameSignup, setInvoiceAddressSignup, setInvoicePostCodeSignup, setInvoiceCitySignup, setDeliveryAddressSignup, setDeliveryPostCodeSignup, setDeliveryCitySignup, emailSignup, passwordSignup, passwordConfirmSignup, lastnameSignup, firstnameSignup, invoiceAddressSignup, invoicePostCodeSignup, invoiceCitySignup, deliveryAddressSignup, deliveryPostCodeSignup, deliveryCitySignup, submitSignup, resetField, checkedVegan, setCheckedVegan  }) => {
    const handleCheck= (e) => {  
        const vegan = e.currentTarget.classList.contains("checked")
        setCheckedVegan(!vegan)
       }

    const handleOnSubmit = (e) => {
        e.preventDefault(); 
        handleControlOnSubmit();
        submitSignup();
        resetField();
    }
    const handleControlOnSubmit = () => {
        if(passwordSignup===setPasswordConfirmSignup){console.log('ok')}
        else (console.log('erreur de mdp'))  
    }
    return (
        <div className="loginpage__signup">
        <form
                action="submit"
                method="post"
                className="loginpage__signup--form"
                onSubmit={handleOnSubmit}
            >
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">S'inscrire</h2>
                    <div className="loginpage__signup__input">
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Email' 
                            type="email"
                            value={emailSignup}
                            onChange={(e) => setEmailSignup(e.target.value)}
                        />
                        <Input 
                            className="loginpage__signup__input__content"
                            placeholder='Mot de Passe' 
                            type="password"
                            value={passwordSignup}
                            onChange={(e) => setPasswordSignup(e.target.value) }
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Confirmation de Mot de passe'
                            type="password"
                            value={passwordConfirmSignup}
                            onChange={(e) => setPasswordConfirmSignup(e.target.value) }
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Nom'
                            type="text"
                            value={lastnameSignup}
                            onChange={(e) => setLastnameSignup(e.target.value) }
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Prénom'
                            type="text"
                            value={firstnameSignup}
                            onChange={(e) => setFirstnameSignup(e.target.value) }
                        />
                    </div>
            </div>
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">Adresse de facturation</h2>
                    <div className="loginpage__signup__input">
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Adresse'
                            type="text"
                            value={invoiceAddressSignup}
                            onChange={(e) => setInvoiceAddressSignup(e.target.value)}
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Code Postal'
                            type="text"
                            pattern="[0-9]{5}" 
                            value={invoicePostCodeSignup}
                            onChange={(e) => setInvoicePostCodeSignup(e.target.value)}
                        />
                        <Input
                            className="loginpage__signup__input__content"
                            placeholder='Ville'
                            type="text"
                            value={invoiceCitySignup}
                            onChange={(e) => setInvoiceCitySignup(e.target.value)}
                        />
                    </div>
            </div>
            <div className="loginpage__signup--form">
                <h2 className="loginpage__signup__title">Adresse de livraison</h2>
                <div className="loginpage__signup__input">
                    <Input
                    className="loginpage__signup__input__content"
                    placeholder='Adresse'
                    type="text"
                    value={deliveryAddressSignup}
                    onChange={(e) => setDeliveryAddressSignup(e.target.value)}
                    />
                    <Input
                        className="loginpage__signup__input__content"
                        placeholder='Code Postal'
                        type="text"
                        pattern="[0-9]{5}" 
                        value={deliveryPostCodeSignup}
                        onChange={(e) => setDeliveryPostCodeSignup(e.target.value)}
                    />
                    <Input
                        className="loginpage__signup__input__content"
                        placeholder='Ville'
                        type="text"
                        value={deliveryCitySignup}
                        onChange={(e) => setDeliveryCitySignup(e.target.value)}
                    />
                </div>
            </div>
            <div className="loginpage__options">
                <div className="loginpage__options__checkbox">
                    <Checkbox
                        className="loginpage__options__checkbox__content"
                        label='Vegan'
                        value={checkedVegan}
                        onClick={handleCheck}
                    />
                    <Checkbox
                        className="loginpage__options__checkbox__content"
                        label="Je souhaite m'abonner à la newsletter"
                    />
                </div>
            </div>
            <div className="loginpage__validate">
                <button
                    type="submit"
                    className="loginpage__signup__button"
                >
                        Créer mon compte
                </button>
            </div>
        </form>
    </div>
    )
};

export default Signup;
