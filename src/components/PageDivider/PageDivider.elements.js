import styled from "styled-components"

const dividerColorType = dividerColor => {
    switch (dividerColor) {
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


export const Divider = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff
`
export const Triangle = styled.div`
    margin-top: -1px;
    width: 0; 
    height: 10; 
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 60px solid ${({dividerColor}) => dividerColorType(dividerColor)};
    z-index: 99;
`