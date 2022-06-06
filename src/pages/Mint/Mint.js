import React from 'react'
import Header  from '../../components/Header/Header'
import PageDivider from '../../components/PageDivider/PageDivider';
import  MintBody  from '../../components/MintBody/MintBody';
import { headerObject, dividerObject } from './Data';

const Mint = () => {
  return (
    <>
    <Header {...headerObject}/>
    <PageDivider {...dividerObject}/>
    <MintBody/>
    </>
  )
}

export default Mint