import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { HeaderSection, HeaderTextWrapper, HeaderTitle} from './Header.elements'


const HeaderWithImages = ({headerColor, headerTitleText}) => {

  return (
    <HeaderSection headerColor={headerColor}>
        <HeaderTextWrapper>
            <HeaderTitle>{headerTitleText}</HeaderTitle>
            <ImageCarousel />
        </HeaderTextWrapper>
    </HeaderSection>
  )
}

export default HeaderWithImages