import React from 'react'
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import PageBodyHeader from '../../components/PageBodyHeader/PageBodyHeader';
import { headerObject, dividerObject } from './Data';

const Scholarship = () => {
  return <>
    <Header {...headerObject}/>
    <PageDivider {...dividerObject}/>
    <PageBodyHeader />
  </>
}

export default Scholarship