import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderImage} from './HeaderWithImages.elements'
import PreviewGif from '../../images/preview.gif'

const HeaderWithImages = ({headerColor, headerTitleText}) => {

  return (
    <HeaderSection headerColor={headerColor}>

        <HeaderTextWrapper>
            <HeaderTitle>{headerTitleText}</HeaderTitle>
        </HeaderTextWrapper>

        <HeaderImage src={PreviewGif} />

    </HeaderSection>
  )
}

export default HeaderWithImages
