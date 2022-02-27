 import styled from 'styled-components'

 const headerColorType = headerColor => {
    switch (headerColor) {
        case "purple":
            return "#965BA0";
          case "blue":
            return "#2581BB";
          case "green":
            return "#49BA6F";
          case "orange":
            return "#F49B1D";
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
    
    @media screen and (max-width: 768px) {
      padding: 40px;
    }
 `

 export const HeaderTitle = styled.h1`
    margin-bottom: 34px;
    font-size: 64px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;
    text-align: center;
 `
 export const HeaderBody = styled.p`
    max-width: 740px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
 `

 export const HeaderTextWrapper = styled.div`
  max-width: 740px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const HeaderTriangle = styled.div`
    position: aboslute;
    width: 0; 
    height: 0; 
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid #fff;
    z-index: 99;
`