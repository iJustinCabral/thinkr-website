import styled from 'styled-components'

export const BodyFAQTitle = styled.div`
    padding: 8px;
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const BodyFAQSection = styled.div`
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.content{
        display:none;
    }

    &.active-content{
        display: block;
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
     }
`

export const CardSection = styled.div`
    padding: 40px;
    margin: 20px;
    max-width: 100%;
    border-radius: 25px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media screen and (max-width: 768px) {
        padding: 20px;
     }

`

export const CTitle = styled.h1`
    margin-bottom:16px;
    font-size: 40px; 
    line-height: 1.1;
    font-weight: 600;
    color: #000000;
    text-align:center;

    @media screen and (max-width: 768px) {
       font-size: 26px;
    }
`

export const CAnswer = styled.p`
    max-width: 740px;
    margin-bottom 20px;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    text-align:center;
`

export const CTextWrapper = styled.div`
    max-width: 740px;
    padding-top: 20;

    @media screen and (max-width: 768px) {
        padding-bottom: 20px;
    }
`

export const CButtonSection = styled.button`
    padding: 20px;
    background: #fff;
    border-radius: 25px;
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 5px;
    color: #000;

    &:hover {
        color: #fff;
        background: #F49B1D;
    }

    &.active {
        background: #F49B1D;
    }
`

export const CButtonTitle = styled.h1`
    font-size: 40px; 
    line-height: 1.1;
    font-weight: 600;
    color: #000000;
    text-align:center;
`