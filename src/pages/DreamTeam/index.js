import React from 'react';
import dreamprez from 'src/assets/images/dreamteam/_Présentation Sprint 2.svg';
import projet from '/src/assets/images/dreamteam/Présentation Projet.svg'
import logo from '/src/assets/images/dreamteam/_Présentation Logo.svg';
import './styles.scss';

const DreamTeam = () => (
  <div className="dreamteam">
    <img src={logo} />
    <br/>
    <br/>
    <br/>
    <img src={dreamprez} />
    <br/>
    <br/>
    <br/>
    <img src={projet} />
  </div>
);

export default DreamTeam;
