import styled from "styled-components";


export const SectionContainer = styled.div`
    padding-top: 40px;
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const LeftSection = styled.div`
    padding: 20px;
    background: #fff;   
    flex-shrink: 0;
    flex-basis: 40%;
    min-width: 300px;
    text-align: center;

`

export const RightSection = styled.div`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 20px;
    margin: 20px;
    max-width: 740px;
`

export const ContentWrapper = styled.div`
    transition: all 0.2s;
    display: none;
    position: relative;

    &.active-content {
        display: block;
    }
`

export const QuestionItem = styled.button`
    cursor: pointer;
    border:0.16em solid rgba(255,255,255,1);
    border-radius:2em;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    transition: all 0.2s;
    padding: 20px;
    margin: 30px;
    color: #000;

    &:hover {
        color: #fff;
        background: #965BA0;
    }

    &.active {
        background: #965BA0;
        color: #fff
    }
`

export const SectionTitle = styled.h1`
    margin-top: 34px;
    margin-bottom: 20px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #000;
    text-align: center;
`

export const SectionBody = styled.p`
    max-width: 740px;
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 24px;
    color: #000;
    display: flex;
    
`
export const SectionPhoto = styled.img`
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    border-radius: 50%;
    width: 280px;
    height: 280px;
`

export const BottomSection = styled.div`
    padding: 20px;
    margin-top: 60px;
`

export const BottomTitleText = styled.h1`
    margin-bottom: 34px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color:  #965BA0;
    text-align: center;  
`



// border: 2px solid palevioletred;
// border-radius: 3px;