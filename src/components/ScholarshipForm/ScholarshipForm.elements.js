import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 1em;
    box-sizing: border-box;

    @media (min-width: 600px) {
        .contain {
          padding: 0;
        }
      }
`

export const FormWrapper = styled.div`
    padding: 40px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
`

export const Information = styled.div`
    background: #101522;
    color: #fff;
`

export const Form = styled.form`
    display: grid;
    justify-content: center;
    align-content: center;
    grid-template-columns : 2fr 2fr;
    grid-gap: 20px;
`

export const Field = styled.label`
    padding: 10px;
    margin-bottom: 6px;
    width: 100%;
    border-radius: 12px;
`

export const Input = styled.input`
    width: 80%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;

    &:focus {
        outline: 3px solid #49BA6F;
    }
`

export const FileInput = styled.input.attrs({
    type: 'file'
})`
    padding: 12px 20px;
    margin-bottom: 16px;

`

export const SubmitButton = styled.button`
    border-radius: 12px;
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
    grid-column: 1 /3;
    width: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(0.9);
    }

`

export const Divider = styled.hr`
    display: block;
    height: 3px;
    border: 0;
    border-top: 2px solid #000;
`