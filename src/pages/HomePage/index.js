import React, { useRef, useEffect }from 'react';
import ImageIntro from './ImageIntro';
import SellingPoints from './SellingPoints';
import MelaineIntro from './MelaineIntro';
import MelaineActus from './MelaineActus';
import { Input } from 'semantic-ui-react';
import './styles.scss';

const HomePage = () => {  
const home = useRef(null);

useEffect(() => {  
	window.scrollTo(0,0);
},[]);

return(
  <div ref={home}>
    <ImageIntro />
    <div className="centered">
      <SellingPoints />
    </div>
    <MelaineIntro />
    <MelaineActus />
    <div className="centered">
      <Input action="Je m'inscris à la newsletter" placeholder='Adresse Email' className="input__newsletter" />
    </div>
  </div>
)};

export default HomePage;

