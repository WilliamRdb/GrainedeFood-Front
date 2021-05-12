import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Signin from 'src/containers/Signin';
import Signup from 'src/containers/Signup';
import './style.scss';


const LoginPage = ({firstname, logged}) => {
console.log('logged:', logged)
    
    return (
      <div className="loginpage">
        {logged && (<Redirect to='/' />)}
        <Signin />
        <Signup />
      </div>
    );
}

export default LoginPage;
