import React , {useEffect}from 'react';
import moment from 'moment';
import api from 'src/api'

const SubscribeInformations = ({orderStartDate, orderEndDate}) => {
    moment.locale('fr');
    return (
        <div className="userpage">
            <div className="userpage__informations__subscribe">
                <h2>Mon Abonnement</h2>
                {orderStartDate ? (
                    <>
                    <p>Abonnement commencé le : {moment(orderStartDate).format('LL')}</p>
                    <p>Vous êtes abonné jusqu'au : {moment(orderEndDate).format('LL')}</p>
                    </>
                ) : (
                    <p> Vous n'êtes pas encore abonné.</p>
                )} 
                
            </div>
        </div>
    );
};

export default SubscribeInformations;