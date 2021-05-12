import React from 'react'
import { Tab } from 'semantic-ui-react'

const ForumuleTab = ({ setSub1Month, setSub3Month, setSub6Month }) => {
  const setSubMonths = (e) => {
    //console.log(e.currentTarget.childNodes[1].children[1].innerText)
    //console.log(e.currentTarget.children[1].lastChild.innerText)
    const el = e.target.innerText
    console.log(el)
    if(el==='1 mois') {setSub1Month()}
    else if (el === '3 mois') {setSub3Month()}
    else {setSub6Month()}
  }
const panes = [
  {
    menuItem: '1 mois',

    render: () => <Tab.Pane attached={false}>
        <div className ="text__formule">Je souscris aujourd'hui et je profite dès le mois prochain 
        de ma box ! <br/><br/>Livraison à domicile offerte / Sans Engagement
        <br/><br/>Il suffit de cliquer sur le bouton s’abonner et de créer un compte qui nécessite 
        de renseigner ses coordonnées (adresse e-mail et adresse de livraison). Il vous sera ensuite 
        proposé un mode de paiement sécurisé par carte bancaire. <br/><br/>L’abonnement est sans engagement et vous 
        permet de recevoir le mois prochain notre box  !
        </div><div className ="pricing">29.99 €</div></Tab.Pane>  
  },
  {
    menuItem: '3 mois',
    render: () => <Tab.Pane attached={false}><div className ="text__formule">Je souscris aujourd'hui et je profite dès le mois prochain 
        de ma box ! <br/><br/>Livraison à domicile offerte / Sans Engagement
        <br/><br/> Il suffit de cliquer sur le bouton s’abonner et de créer un compte en renseignant vos 
        coordonnées (adresse e-mail et adresse de livraison). Il vous sera ensuite 
        proposé un mode de paiement sécurisé par carte bancaire.<br/><br/> L’abonnement est sans engagement et vous 
        permet de recevoir pour les 3 prochains mois nos différentes box  !
        </div><div className ="pricing">49.99 €</div></Tab.Pane>,
  },
  {
    menuItem: '6 mois',
    render: () => <Tab.Pane attached={false}><div className ="text__formule">Je souscris aujourd'hui et je profite dès le mois prochain 
        de ma box ! <br/><br/>Livraison à domicile offerte / Sans Engagement
        <br/><br/> Il suffit de cliquer sur le bouton s’abonner et de créer un compte qui nécessite 
        de renseigner ses coordonnées (adresse e-mail et adresse de livraison). Il vous sera ensuite 
        proposé un mode de paiement sécurisé par carte bancaire.<br/><br/> L’abonnement est sans engagement et vous 
        permet de recevoir pour les 6 prochains mois nos  différentes box !</div><div className ="pricing"> 69.99 €</div></Tab.Pane>,
  },
]

return (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} onClick={setSubMonths} className="navformule" />
)

}


export default ForumuleTab;
