import React from 'react';
import SplitSection from '../../components/SplitSection/SplitSection';
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import {dividerObject, headerObject} from './Data' 

const Dao = () => {
  return <>
    <Header {...headerObject}/>
    <PageDivider {...dividerObject}/>
    <SplitSection />
  </>;
};

export default Dao;
