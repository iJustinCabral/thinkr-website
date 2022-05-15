import React from 'react'
import { TitleSection, TitleText } from './PageBodyHeader.elements'

const PageBodyHeader = ({txt}) => {
  return <>
    <TitleSection>
        <TitleText>
            {txt}
        </TitleText>
    </TitleSection>
  </>
}

export default PageBodyHeader