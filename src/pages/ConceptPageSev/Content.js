import React from 'react';
import { Grid, Image, Container, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import concept2 from 'src/assets/images/IllustrationsHomepage/pexels-tima-miroshnichenko-6508773.jpg';
import './styles.scss';

const Content = () => (
  <div className="concept">
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable>
      <Grid.Column only='computer' width={6}>
        <Image src='https://cdn.pixabay.com/photo/2017/06/22/20/14/salmon-2432339__340.jpg' className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src='https://cdn.pixabay.com/photo/2017/06/22/20/14/salmon-2432339__340.jpg' className='concept-image--mobile' />
      </Grid.Column>
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2'>Surprises et découvertes gourmandes</Header>
          <p>
            Chaque mois, pendant toute la durée de votre abonnement, le meilleur de la gastronomie locale 
            chez vous !Et si en plus le coffret gourmand était élégant, 100% biodégradable et que les produits 
            qui le composent sont de véritables pépites de petits artisans du terroir, que vous ne trouverez pas 
            en supermarché ? Graine de Food, c'est l'occasion de découvrir ou de redécouvrir 
            chaque mois un terroir français différent à travers une sélection de produits d’épicerie fine.
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2'>Surprises et découvertes gourmandes</Header>
          <p>
            Chaque mois, pendant toute la durée de votre abonnement, le meilleur de la gastronomie locale 
            chez vous !Et si en plus le coffret gourmand était élégant, 100% biodégradable et que les produits 
            qui le composent sont de véritables pépites de petits artisans du terroir, que vous ne trouverez pas 
            en supermarché ? Graine de Food, c'est l'occasion de découvrir ou de redécouvrir 
            chaque mois un terroir français différent à travers une sélection de produits d’épicerie fine.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
  </section>
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable  className="reversed">
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2' > Engagés pour l'artisanat français !</Header>
          <p>
            Notre mission?  Permettre à chaque artisan, qui produit en France à partir de matières et 
            ingrédients nobles et respectueux de l’environnement, de conquérir de nouveaux clients et de vivre 
            correctement de son travail. C'est pourquoi nous sélectionnons tous les mois des produits de qualité 
            Made In France ! Parce que le terroir peut s’explorer par les papilles, Graine de Food vous propose 
            chaque mois un voyage à travers les jolies régions de France
          </p>
        </Container>
      </Grid.Column>
 <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2' >Engagés pour l'artisanat français !</Header>
          <p>
             Notre mission?  Permettre à chaque artisan, qui produit en France à partir de matières et 
            ingrédients nobles et respectueux de l’environnement, de conquérir de nouveaux clients et de vivre 
            correctement de son travail. C'est pourquoi nous sélectionnons tous les mois des produits de qualité 
            Made In France ! Parce que le terroir peut s’explorer par les papilles, Graine de Food vous propose 
            chaque mois un voyage à travers les jolies régions de France
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='computer' width={6}>
        <Image src={concept2} className='concept-image align-left' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src={concept2} className='concept-image--mobile' />
      </Grid.Column>
    </Grid>
  </section>
  <a className='button-link' href='/abonnement'><button>Je m'abonne à la box Graine de Food</button></a>
  <section className='concept-container'>
    <Grid verticalAlign='middle' stackable>
      <Grid.Column only='computer' width={6}>
        <Image src='https://cdn.pixabay.com/photo/2017/07/01/18/18/macaron-2462247__340.jpg' className='concept-image align-right' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src='https://cdn.pixabay.com/photo/2017/07/01/18/18/macaron-2462247__340.jpg' className='concept-image--mobile' />
      </Grid.Column>
      <Grid.Column  only='computer' width={10}>
        <Container text>
          <Header as='h2'>Sans engagement, c'est encore  mieux</Header>
          <p>
            Chez Graine de Food pas d'engagement, pas de surprise. Nous proposons 3 formules simples : 
            1 mois, 3 mois ou 6 mois. C'est vous qui choisissez ! Après avoir passé votre commande, 
            vous recevrez à la fin du mois suivant votre première box .
            Vous souhaitez offrir cet box ? Pas de problème, nous livrons partout en France, vous pouvez choisir 
            une adresse de livraison différente de votre adresse de facturation.
          </p>
        </Container>
      </Grid.Column>
    <Grid.Column  only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2'>Sans engagement, c'est encore  mieux</Header>
          <p>
            Chez Graine de Food pas d'engagement, pas de surprise. Nous proposons 3 formules simples : 
            1 mois, 3 mois ou 6 mois. C'est vous qui choisissez ! Après avoir passé votre commande, 
            vous recevrez à la fin du mois suivant votre première box .
            Vous souhaitez offrir cet box ? Pas de problème, nous livrons partout en France, vous pouvez choisir 
            une adresse de livraison différente de votre adresse de facturation.
          </p>
        </Container>
      </Grid.Column>
    </Grid>
    </section>
    <section className='concept-container'>
    <Grid verticalAlign='middle' stackable  className="reversed">
      <Grid.Column only='computer' width={10}>
        <Container text>
          <Header as='h2' >Vegan ? We ❤️ you </Header>
          <p>
            Vous suivez un régime végétarien ? Vous avez des convictions concernant la cause animale ? 
            Chez Graine de Food, nous sommes ravis de pouvoir vous proposer une box personnalisée 100 % Vegan. 
            Si une de box contennait de la viande, nous remplacerons alors ce produit par un équivalent sans viande ou un autre produit de notre selection. 
            Pensez à cocher la case Vegan lors de votre inscription ! 
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Container text>
          <Header as='h2' >Vegan ? We ❤️ you</Header>
          <p>
            Vous suivez un régime végétarien ? Vous avez des convictions concernant la cause animale ? 
            Chez Graine de Food, nous sommes ravis de pouvoir vous proposer une box personnalisée 100 % Vegan. 
            Si une de box contennait de la viande, nous remplacerons alors ce produit par un équivalent sans viande ou un autre produit de notre selection. 
            Pensez à cocher la case Vegan lors de votre inscription ! 
          </p>
        </Container>
      </Grid.Column>
      <Grid.Column only='computer' width={6}>
        <Image src='https://cdn.pixabay.com/photo/2016/09/12/08/22/breakfast-1663295__340.jpg' className='concept-image align-left' />
      </Grid.Column>
      <Grid.Column only='mobile tablet' width={16}>
        <Image src='https://cdn.pixabay.com/photo/2016/09/12/08/22/breakfast-1663295__340.jpg' className='concept-image--mobile' />
      </Grid.Column>
    </Grid>
  </section>
  <Link className='button-link' to='/abonnement'><button>Je m'abonne à la box Graine de Food</button></Link>
  </div>
);

export default Content;
