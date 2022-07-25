import React from 'react'
import { TitleSection, TitleText } from './PageBodyHeader.elements'

const PageBodyHeader = ({txt, textColor}) => {
  return <>
    <TitleSection>
        <TitleText textColor={textColor}>
            {txt}
        </TitleText>
    </TitleSection>
  </>
}

export default PageBodyHeader