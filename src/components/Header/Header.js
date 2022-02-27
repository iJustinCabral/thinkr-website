import React from 'react'
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderBody} from './Header.elements'

const Header = ({headerColor, headerTitleText, headerBodyText}) => {
  return (
    <HeaderSection headerColor={headerColor}>
            <HeaderTextWrapper>
                <HeaderTitle>{headerTitleText}</HeaderTitle>
                <HeaderBody>{headerBodyText}</HeaderBody>
            </HeaderTextWrapper>
    </HeaderSection>
  ) 
}

export default Header