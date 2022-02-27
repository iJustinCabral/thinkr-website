import styled from 'styled-components'

const headerColorType = headerColor => {
    switch (headerColor) {
        default:
          return "#fff";
      }
 }

 export const HeaderSection = styled.div`
 padding: 80px;
 background: ${({headerColor}) => headerColorType(headerColor)};
 display: flex;
 justify-content: center;
 align-items: center;
`

export const HeaderTitle = styled.h1`
 margin-bottom: 34px;
 font-size: 64px;
 line-height: 1.1;
 font-weight: 400;
 color: #000000;
 text-align: center;
`
export const HeaderTextWrapper = styled.div`
  max-width: auto;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`
export const Container = styled.section`
  background-color: #fff;
  min-height: auto;
  min-width:auto;
  box-sizing: content-box;
  display: block;
`
export const TeamProfiles = styled.div`
  min-width: auto;
  width:auto;
  padding-top: 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`
//Block where hidden bio will be
export const HiddenBio = styled.p`
  display: block;
  visibility: hidden;
  background-color: #fff;
  max-height: 0px;
  overflow:hidden;
  border-radius: 22px;
  position: relative;
  padding: 0 16px;
  margin-top: -5px;
  margin-bottom: 10px;
  font-size: 14px
  font-family: "Poppins",sans-serif;
  opacity: 0;
  will-change: max-height,visibility, opacity;
  transition: max-height 1s,visibility 2s, opacity 1s;
`


export const TeamMember = styled.div`
  max-width: 340px;
  width: auto;
  max-height: 500px;
  height: auto;
  margin: 10px 20px 20px 10px;
  text-align: left;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  border-radius: 22px;
  box-sizing: border-box;
  display: block;
  position: relative;
  will-change: max-height;
  transition-property: all;
  transition-duration: 0.5s;
  &:hover{
    max-height: 500px;
  }
  &:hover ${HiddenBio} {
    visibility: visible;
    opacity 1;
    max-height: 200px;
  }
`
export const JoinOurTeam = styled.div`
  max-width: 340px;
  width: 340px;
  max-height: 500px;
  height: 330px;
  margin: 10px 20px 20px 10px;
  text-align: left;
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  border-radius: 22px;
  box-sizing: border-box;
  display: block;
  position: relative;
`
export const ProfilePic = styled.a`
  max-width: 100%;
  width: auto;
  max-height: 100%
  height:auto;
  position: relative;
  display: block;
`
export const Img1 = styled.img`
  border-radius: 30px;
  max-width: 200px;
  width: 100%;
  height: auto; 
  position: relative;
  display: block;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
`
export const TwitterPic = styled.img`
  display: block!important;
  position: relative;
  bottom: 40px;
  margin-top: -15px;
  margin-left:220px;
  padding: 10px 6px;
  width: auto;
  max-width: 40px;
  max-height: 80%;
  height: auto;
  display: block;
  background-color: #1da1f2;
  border-radius: 40px;
  &:hover{
    background:#2581bb;
    color#2581bb:
  }
`
export const Name = styled.h2`
  padding: 0 16px;
  font-size: 24px;
  font-family: "Poppins",sans-serif;
`
export const Position = styled.p`
  padding: 0 16px;
  margin-bottom: 20px;
  font-size: 14px
  font-family: "Poppins",sans-serif;
`

