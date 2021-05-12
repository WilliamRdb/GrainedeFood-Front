import React from 'react';
import { Image, Container, Header } from 'semantic-ui-react';
import imgIntro from '/src/assets/images/IllustrationsHomepage/melaine_grainedemagie.jpg';
import './styles.scss';

const MelaineIntro = () => (
  <div className="presentation">
    <Image src={imgIntro} alt="Image d'introduction" size='medium' className='margin-auto' />
    <Container text>
      <Header as='h2'>Un service proposé par Graine de Magie</Header>
      <p>
        Bienvenue sur le site Graine de Food ! <br/><br/>Une petite présentation s’impose :
Moi c’est Mélaine j’ai 25 ans et je vis à Paris. Aujourd’hui blogueuse du site Graine de Magie à plein temps bienvenue dans mon univers. 
<br/><br/>Grande Gourmande, j'ai décidé de créer le site Graine de Food pour vous proposer chaque mois directement chez vous un savoureux coffret gourmand surprise.
<br/><br/>Cette box a pour but de promouvoir les produits Made in France et la richesse de notre beau patrimoine culinaire ! 
J'ai à coeur de vous faire découvrir, chaque mois,  des produits de qualité issus de producteurs français que j'ai moi-même selectionné.
<br/><br/>J’espère que ce concept vous plaira, je vous dis à très vite !
      </p>
    </Container>
  </div>
);

export default MelaineIntro;
