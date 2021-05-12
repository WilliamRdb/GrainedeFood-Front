import React, { useEffect }  from 'react';
import MainPic from 'src/pages/SubscribePage/MainPic';
//import TexteFormule from 'src/pages/SubscribePage/TexteFormule';
import Button from 'src/pages/SubscribePage/Button';
import NavFormule from 'src/containers/NavFormule';
//import Price from 'src/pages/SubscribePage/Price';
import './styles.scss';

const Subscribe = ({ setSub1Month }) => {

  useEffect(() => {
    setSub1Month();
  });

    return (
    <div className="subscribe">
      <MainPic />
      <NavFormule />
      
      <Button />
    </div>
    );
};


export default Subscribe;
