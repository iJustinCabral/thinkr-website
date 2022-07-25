import React from 'react'
import HeaderWithImages from '../../components/Header/HeaderWithImages'
import PageDivider from '../../components/PageDivider/PageDivider';
import  MintBody  from '../../components/MintBody/MintBody';
import { headerObject, dividerObject, pageBodyHeaderObject } from './Data';
import PageBodyHeader from '../../components/PageBodyHeader/PageBodyHeader';

const Mint = () => {
  return (
    <>
    <HeaderWithImages {...headerObject}/>
    <PageDivider {...dividerObject}/>
    <PageBodyHeader {...pageBodyHeaderObject} />
    <MintBody/>
    </>
  )
}

export default Mint