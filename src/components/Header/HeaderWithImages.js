import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { HeaderSection, HeaderTextWrapper, HeaderTitle} from './Header.elements'

const images = [
    "../../images/ada.png",
    "../../images/ada.png",
    "../../images/ada.png",
    "../../images/ada.png",
    "../../images/ada.png",
]


const HeaderWithImages = ({headerColor, headerTitleText, headerBodyText}) => {

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