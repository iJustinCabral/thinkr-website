import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MintButton = styled.button`
    border-radius: 12px;
    white-space: nowrap;
    padding: 14px 20px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    width: 50%;
    transition: all 0.3s ease-in-out;
    background: #000;

    &:hover {
        transform: scale(0.9);
    }

`
