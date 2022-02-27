import React from 'react';
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import {BodyHeader} from '../../components';
import {dividerObject, headerObject, teamObjOne} from './Data' 

const Team = () => {
    return <>
      <Header {...headerObject}/>
      <PageDivider {...dividerObject}/>
      <BodyHeader {...teamObjOne}/>
    </>;
  };
  
  export default Team;