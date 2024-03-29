import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`

export const Button = styled.button`
    border-radius: 4px;
    background: #4B59F7;
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const DiscordButton = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#32CD32' : '#32CD32')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#32CD32' : '#32CD32')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const MintButton = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#CBC93E' : '#CBC93E')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#CBC93E' : '#CBC93E')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const ComingSoonButton = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#C13A2C' : '#C13A2C')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: ${({primary}) => (primary ? '#C13A2C' : '#C13A2C')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export default GlobalStyle
