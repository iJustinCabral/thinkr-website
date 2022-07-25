import React from 'react'
import HeaderWithImages from '../../components/Header/HeaderWithImages'
import PageDivider from '../../components/PageDivider/PageDivider';
import { headerObject, dividerObject } from './Data';


const TestPage = () => {
  return (
    <>
        <HeaderWithImages {...headerObject}/>
        <PageDivider {...dividerObject}/>
    </>
  )
}

export default TestPage