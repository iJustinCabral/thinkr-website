import styled from "styled-components";

 const textColorType = textColor => {
    switch (textColor) {
        case "purple":
            return "#965BA0";
          case "blue":
            return "#2581BB";
          case "green":
            return "#49BA6F";
          case "orange":
            return "#F49B1D";
          case "red":
            return "#C13A2C";
          case "grey":
            return "#BDC2C8";
          default:
            return "#fff";
      }
 }


export const TitleSection = styled.div`
    padding: 20px;
    margin-top: 60px;
`

export const TitleText = styled.h1`
    margin-bottom: 34px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:  ${({textColor}) => textColorType(textColor)};
    text-align: center;  
`