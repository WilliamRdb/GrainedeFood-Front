import React from 'react';
import img from 'src/assets/images/Box_Concept.jpg';
import imgProducteur from 'src/assets/images/Producteur_ConceptPage.jpg';
import imgProduit from 'src/assets/images/Produit_ConceptPage.jpg';
import imgAbonnement from 'src/assets/images/Abonnement_ConceptPage.jpg';
import './style.scss';

const ConceptPage = () => {
    return (
        <div className="conceptPage">
            <div className="conceptPage__img">
                <img src={img} alt="image de box" className="conceptPage__img__content" />
            </div>
            <div className="conceptPage__presentation">
                <h2 className="conceptPage__presentation__title">
                    Le concept de notre offre
                </h2>
                <p className="conceptPage__presentation__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nemo dignissimos reiciendis dolor a consequatur laborum qui incidunt! Voluptas, modi. Exercitationem dicta sint doloribus ullam? Animi sapiente sed aperiam accusamus.
                    Facilis, magnam nobis consequatur minima nihil fugiat culpa esse perspiciatis voluptatibus similique commodi incidunt quo obcaecati architecto asperiores earum, doloribus eum, possimus porro repellendus delectus dolorem? Vel fugit eum pariatur.
                    Error facilis, corrupti perspiciatis aliquid tempore ad ullam magnam obcaecati minima nisi odio dicta ut iste? Doloribus voluptatibus placeat quae officia fugiat repellendus illum beatae perferendis consequatur. Earum, labore quis.
                </p>
            </div>
            <div className="conceptPage__main">
                <div className="conceptPage__main__content">
                    <div className="conceptPage__main__content__left">
                        <img
                            src={imgProducteur}
                            alt="photo d'un producteur"
                            className="conceptPage__main__content__left__img"
                            ></img>
                    </div>
                    <div className="conceptPage__main__content__right">
                        <h3 className="conceptPage__main__content__right__title">
                            Le choix des producteurs
                        </h3>
                        <p className="conceptPage__main__content__right__content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium sunt veritatis unde a? Quasi dolor explicabo repellat in vero earum. Fugit quae praesentium qui soluta unde eum consequuntur quod?
                            Officiis, assumenda reprehenderit? Hic, totam, eligendi omnis minima cum necessitatibus, error aperiam ducimus magni eaque provident sint quasi aspernatur doloribus ratione esse atque est voluptate saepe? Iure iste temporibus repellat!
                        </p>
                        <button className="conceptPage__main__content__right__button">
                            Découvrir nos box
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="conceptPage__main">
                <div className="conceptPage__main__content">
                    <div className="conceptPage__main__content__left">
                        <img
                            src={imgProduit}
                            alt="photo d'un producteur"
                            className="conceptPage__main__content__left__img"
                            ></img>
                    </div>
                    <div className="conceptPage__main__content__right">
                        <h3 className="conceptPage__main__content__right__title">
                            Engagés pour l'artisanat français !
                        </h3>
                        <p className="conceptPage__main__content__right__content">
                             Notre mission : permettre à chaque artisan, qui produit en France à partir de matières et ingrédients nobles et respectueux de l’environnement, de conquérir de nouveaux clients et de vivre correctement de son travail.
                            C'est pourquoi nous sélectionnons tous les mois des produits de qualité Made In France !
                        </p>
                        <button className="conceptPage__main__content__right__button">
                            Voir la box du mois précédent
                        </button>
                    </div>
                </div>
                
            </div>
            <div className="conceptPage__main">
                <div className="conceptPage__main__content">
                    <div className="conceptPage__main__content__left">
                        <img
                            src={imgAbonnement}
                            alt="photo d'un producteur"
                            className="conceptPage__main__content__left__img"
                            ></img>
                    </div>
                    <div className="conceptPage__main__content__right">
                        <h3 className="conceptPage__main__content__right__title">
                            Abonnement
                        </h3>
                        <p className="conceptPage__main__content__right__content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam praesentium sunt veritatis unde a? Quasi dolor explicabo repellat in vero earum. Fugit quae praesentium qui soluta unde eum consequuntur quod?
                            Officiis, assumenda reprehenderit? Hic, totam, eligendi omnis minima cum necessitatibus, error aperiam ducimus magni eaque provident sint quasi aspernatur doloribus ratione esse atque est voluptate saepe? Iure iste temporibus repellat!
                        </p>
                        <button className="conceptPage__main__content__right__button">
                            Je m'abonne
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};


export default ConceptPage;

