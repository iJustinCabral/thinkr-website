import styled from 'styled-components'

export const Container = styled.div`
    padding: 5px 20px;
    justify-content: center;
    align-items: center;
    display: grid;
`

export const Form = styled.form`
    position : relative;
    padding: 10px;
    box-sizing: border-box;

    display  : grid;
    grid-template-columns : repeat(3, 1fr);
    grid-template-rows    : 10em 1em 1em 1em;
`

export const Field = styled.label`
    padding: 10px;
    margin-bottom: 6px;
`

export const SubmitButton = styled.button`
    border-radius: 12px;
    background: #C13A2C;
    white-space: nowrap;
    padding: 14px 20px;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    color: #fff;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`