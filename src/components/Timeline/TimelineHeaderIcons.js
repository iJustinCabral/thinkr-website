import React from 'react'
import adaImage from "../../images/lovelace.jpg"
import lockeImage from "../../images/locke2.jpg"
import carmackImage from "../../images/carmack.jpg"
import { HeaderSection, HeaderTextWrapper, HeaderTitle, HeaderBody, HeaderButton, HeaderButtonTitle, HeaderButtonImage, HeaderButtonYear, ButtonWrapper, HeaderButtonWrapper} from './TimelineHeaderIcons.elements'

function TimelineHeaderIcons ({headerColor, headerTitleText, headerBodyText, setToggleState, toggleState, executeScroll})  {
  return (
    <HeaderSection headerColor={headerColor}>
            <HeaderTextWrapper>
                <HeaderTitle>{headerTitleText}</HeaderTitle>
                <HeaderBody>{headerBodyText}</HeaderBody>
            </HeaderTextWrapper>
            <ButtonWrapper>
              <HButton className= {toggleState === 1 ? "active" : ""} title="Lovelace Era" year="2022" src={adaImage} onClick={ () => {setToggleState(1); executeScroll()}} />
              <HButton className= {toggleState === 2 ? "active" : ""} title="Locke Era"  year="2023" src={lockeImage} onClick={ () => {setToggleState(2); executeScroll()}}/>
              <HButton className= {toggleState === 3 ? "active" : ""} title="Carmack Era" year="2024" src={carmackImage} onClick={ () => {setToggleState(3); executeScroll()}} />
            </ButtonWrapper>
    </HeaderSection>
  )
}

function HButton(props){
  return (
      <HeaderButton className={props.className} onClick={props.onClick}>
          <HeaderButtonWrapper>
              <HeaderButtonTitle>{props.title}</HeaderButtonTitle>
              <HeaderButtonImage src={props.src}/>
              <HeaderButtonYear>{props.year}</HeaderButtonYear>
          </HeaderButtonWrapper>
      </HeaderButton>
  )
}

export default TimelineHeaderIcons
