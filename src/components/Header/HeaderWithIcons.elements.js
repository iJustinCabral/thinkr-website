import styled from 'styled-components'

const headerColorType = headerColor => {
   switch (headerColor) {
       case "purple":
         return "#965BA0";
       case 'orange':
         return "#F49B1D";
       case 'blue':
         return "#2581BB"; 
       default:
         return "#fff";
     }
}

export const HeaderSection = styled.div`
   padding: 80px;
   background: ${({headerColor}) => headerColorType(headerColor)};
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
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

export const HeaderButton = styled.button`
    cursor: pointer;
    padding: 20px;
    margin: 8px;
    backgroundcolor: #000000;
    border: none;
    border-radius: 25px;
    min-width: 250px;
    width: 100%;
    height: 150%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    color: #000;


    &:hover {
        color: ${({headerColor}) => headerColorType(headerColor)};
    }

    &.active {
        color: ${({headerColor}) => headerColorType(headerColor)};
    }

    @media screen and (max-width: 768px) {
      padding-bottom: 4px;
    }
`

export const HeaderButtonTitle = styled.h1`
    font-size: 40px; 
    line-height: 1.1;
    font-weight: 600;
    text-align:center;
`

export const ButtonWrapper = styled.div`
    padding: 8px;
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 600px ){
        width: 100%;
        flex-direction: column;
        
    }

    @media screen and (max-width: 850px ){
      width: 100%;
      flex-direction: column;
      
  }
`

export const HeaderButtonWrapper = styled.div`
    max-width: 740px;

    @media screen and (max-width: 768px) {
        padding-bottom: 20px;
    }
`