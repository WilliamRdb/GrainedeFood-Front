import React, { useEffect, useState } from 'react';
import './styles.scss';

import AdminMenu from 'src/containers/AdminMenu';
import PromoList from 'src/pages/AdminPromoPage/PromoList.js';
import PromoForm from 'src/pages/AdminPromoPage/PromoForm.js';
import api from 'src/api';


const AdminPromoPage = () => {
const [ promosData, setPromos ] = useState([])


  useEffect(() => {  
    api.get('/promos')
    .then((response) => response.data.promos)
      .then((data) => setPromos(data))
      .catch((error) => console.error(error))
},[]);

  return (<div className='container'>
    <AdminMenu />
    <h1>Code Promo</h1>
    <h2>Liste des codes promo enregistrés</h2>
    <PromoList promosData={promosData} />
    <h2>Nouveau code promo</h2>
    <PromoForm />
  </div>)
};

export default AdminPromoPage;
