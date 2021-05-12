import React, { useState, useEffect, Component } from 'react';
//import {Redirect} from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import api from 'src/api';

const Signin = ({setEmailSignin, setPasswordSignin, submitLogin, resetField, emailSignin, passwordSignin}) => {
    
   const handleOnSubmit = (e) => {
       e.preventDefault();
       submitLogin();
       resetField();
    }


    return (
        <div className="loginpage">
            <div className="loginpage__signin">
                <h2 className="loginpage__signin__title">Se connecter</h2>
                <form 
                    action="submit"
                    method="get"
                    className="loginpage__signin--form"
                    onSubmit={(e) => handleOnSubmit(e)}
                    //disabled={!validateForm()}
                >
                
                <div className="loginpage__signin__input">
                    <Input
                        name="signin_email"
                        className="loginpage__signin__input__content"
                        placeholder='Email'
                        type="email"
                        value={emailSignin}
                        onChange={(e) => setEmailSignin(e.target.value) }               
                    />
                    <Input
                        name="signin_password"
                        className="loginpage__signin__input__content"
                        placeholder='Mot de passe' 
                        type="password"
                        value={passwordSignin}
                        onChange={(e) => setPasswordSignin(e.target.value)}
                    />
                </div>
                    <button
                        type="submit"
                        className="loginpage__signin__button"
                        //disabled={!validateForm()}
                    >
                        Se connecter
                    </button>
                    <span className="loginpage__password">Mot de passe oublié ?</span>
                </form>
            </div>
        </div>
      )
}

export default Signin;
