import React from 'react'
import { useRef } from 'react'
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderBody, HeaderButton, HeaderButtonTitle, ButtonWrapper, HeaderButtonWrapper} from './HeaderWithIcons.elements'

function HeaderWithIcons ({headerColor, headerTitleText, headerBodyText, setToggleState, toggleState, executeScroll})  {

  const myRef = useRef(null)

  return (
    <HeaderSection headerColor={headerColor}>
            <HeaderTextWrapper>
                <HeaderTitle>{headerTitleText}</HeaderTitle>
                <HeaderBody>{headerBodyText}</HeaderBody>
            </HeaderTextWrapper>
            <ButtonWrapper>
              <HButton headerColor={headerColor} className= {toggleState === 1 ? "active" : ""} title="General FAQs" onClick={ () => {setToggleState(1); executeScroll()}} />
              <HButton headerColor={headerColor} className= {toggleState === 2 ? "active" : ""} title="Our NFT FAQs"  onClick={ () => {setToggleState(2); executeScroll()}}/>
              <HButton headerColor={headerColor} className= {toggleState === 4 ? "active" : ""} title="Security FAQs" onClick={ () => {setToggleState(4); executeScroll()}} />
            </ButtonWrapper>
    </HeaderSection>
  ) 
}

function HButton(props){
  return (
      <HeaderButton headerColor={props.headerColor} className={props.className} onClick={props.onClick}>
          <HeaderButtonWrapper>
              <HeaderButtonTitle>{props.title}</HeaderButtonTitle>
          </HeaderButtonWrapper>
      </HeaderButton>
  )
}

export default HeaderWithIcons