import React from 'react'
import Header from '../../components/Header/Header';
import PageDivider from '../../components/PageDivider/PageDivider';
import ScholarshipPageBody from '../../components/ScholarshipPageBody/ScholarshipPageBody';
import { headerObject, dividerObject } from './Data';


const Scholarship = () => {
  return <>
    <Header {...headerObject}/>
    <PageDivider {...dividerObject}/>
    <ScholarshipPageBody />
  </>
}

export default Scholarship