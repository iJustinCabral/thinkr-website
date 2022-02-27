import React from 'react'
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderBody} from './TimelineHeader.elements'

const Header = ({headerTitleText, headerBodyText}) => {
  return (
    <HeaderSection>
            <HeaderTextWrapper>
                <HeaderTitle>{headerTitleText}</HeaderTitle>
                <HeaderBody>{headerBodyText}</HeaderBody>
            </HeaderTextWrapper>
    </HeaderSection>
  )
}

export default Header
