import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeNFTSection } from './Data';
import { InfoSection, Community, MintSection} from '../../components';

const Home = () => {
  return <>
      <MintSection {...homeNFTSection}/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <Community {...homeObjFive}/>
      <InfoSection {...homeObjSix}/>
  </>;
};

export default Home;
