import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix } from './Data';
import { InfoSection, Community } from '../../components';

const Home = () => {
  return <>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <Community {...homeObjFive}/>
      <InfoSection {...homeObjSix}/>
  </>;
};

export default Home;
